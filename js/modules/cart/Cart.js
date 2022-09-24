import Api from "./../api/Api.js";
import MoneyChain from "./../utils/convert_currency/MoneyChain.js";
import CartTotal from "./../cart/CartTotal.js";
import EventCartProductUpdate from "./../event/EventCartProductUpdate.js";
import EventCartProductDelete from "./../event/EventCartProductDelete.js";

export default class Cart {
    nameObjectStorage = 'Products';
    urlProducts = "http://localhost:3000/api/products/";
    html = document.querySelector('#cart__items');
    form = document.querySelector('.cart');
    cartAndFormContainer = document.querySelector('#cartAndFormContainer');

    constructor() {
        this.localStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));

        if (this.localStorage) {
            // Reset Cart for Update
            this.html.innerHTML = '';
            this.viewCart();
        } else {
            // View alert empty cart and Remove Form
            this.form.innerHTML = '';
            const article = document.createElement('article');
            article.innerText = 'Votre panier est vide !';
            this.cartAndFormContainer.appendChild(article);
        }
    }

    /**
     * View Product in Cart
     */
    viewCart() {
        // Create Instance Cart Total
        const cartTotal = new CartTotal();

        this.localStorage.forEach(product => {
            const [id, color] = product.id.split('-');
            const apiProduct = new Api();

            apiProduct.getApi(this.urlProducts + id)
                .then(data => {
                    this.makeTemplate(id, color, product.total , apiProduct.data);
                    cartTotal.addProducts(product.total, apiProduct.data.price);
                    // Event Input Increment Decrement
                    new EventCartProductUpdate();
                    // Event Button Delete product
                    new EventCartProductDelete();
                })
                .catch(e => console.error(e));
        });
    }

    /**
     * Create Template Article for product in Cart
     * @param { String } id
     * @param { String } color
     * @param { Number } total
     * @param { {} } apiProduct
     */
    makeTemplate(id, color, total, apiProduct) {
        let totalFormat = `${MoneyChain.convert(apiProduct.price * total)}`;
        if (total > 1) {
            totalFormat = `${MoneyChain.convert(apiProduct.price)} X ${total} = ${totalFormat}`;
        }

        this.html.innerHTML += `
            <article class="cart__item" data-id="${id}" data-color="${color}">
                <div class="cart__item__img">
                    <img src="${apiProduct.imageUrl}" alt="${apiProduct.altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${apiProduct.name}</h2>
                        <p>${color}</p>
                        <p>${totalFormat}</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${total}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>
                    </div>
                </div>
            </article>
        `
    }
}
