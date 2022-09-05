import Api from "./Api.js";
import MoneyChain from "./MoneyChain.js";
import EventCart from "./EventCart.js";
import CartTotal from "./CartTotal.js";
import CartEventDelete from "./CartEventDelete.js";

export default class Cart {
    nameObjectStorage = 'Products';
    urlProducts = "http://192.168.1.11:3000/api/products/";
    html = document.querySelector('#cart__items');

    constructor() {
        // Reset Cart for Update
        this.html.innerHTML = '';

        this.localStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));
        if (this.localStorage) {
            this.viewCart();
        } else {
            const article = document.createElement('article');
            article.innerText = 'Votre panier est vide !';
            this.html.appendChild(article);
        }
    }

    viewCart() {
        // Create Instance Cart Total
        const cartTotal = new CartTotal();

        this.localStorage.forEach(product => {
            const [id, color] = product.id.split('-');
            const apiProduct = new Api();

            apiProduct.getApi(this.urlProducts + id)
                .then(data => {
                    this.viewArticleProduct(id, color, product.total ,apiProduct.data);

                    cartTotal.addProducts(product.total, apiProduct.data.price);

                })
                .catch(e => console.error(e));
        });
    }

    viewArticleProduct(id, color, total, apiProduct) {
        // Create Article General
        const article = document.createElement('article');
        article.setAttribute('class', 'cart__item');
        article.setAttribute('data-id', id);
        article.setAttribute('data-color', color);

        // Create DIV Img
        const divImg = document.createElement('div');
        divImg.setAttribute('class', 'cart__item__img');
        // Create IMG
        const img = document.createElement('img');
        img.setAttribute('src', apiProduct.imageUrl);
        img.setAttribute('alt', apiProduct.altTxt);

        divImg.appendChild(img);
        article.appendChild(divImg);

        // Create DIV Cart Item Content
        const divCartItemContent = document.createElement('div');
        divCartItemContent.setAttribute('class', 'cart__item__content');

        // Create DIV Cart Item Content Description
        const divCartItemContentDescription = document.createElement('div');
        divCartItemContentDescription.setAttribute('class', 'cart__item__content__description');

        // Create Title Product
        const h2TitleProduct = document.createElement('h2');
        h2TitleProduct.innerText = apiProduct.name;

        // Create Paragraphe Color
        const pColor = document.createElement('p');
        pColor.innerText = color;

        // Create Paragraphe Price
        const pPrice = document.createElement('p');
        const totalPrice = MoneyChain.convert(apiProduct.price * total);
        pPrice.innerText = String(totalPrice);

        divCartItemContentDescription.appendChild(h2TitleProduct);
        divCartItemContentDescription.appendChild(pColor);
        divCartItemContentDescription.appendChild(pPrice);
        divCartItemContent.appendChild(divCartItemContentDescription);

        article.appendChild(divCartItemContent);

        // Create DIV Cart Item Content Settings
        const divCartItemContentSettings = document.createElement('div');
        divCartItemContentSettings.setAttribute('class', 'cart__item__content__settings');

        // Create DIV Cart Item Content Settings Quantity
        const divCartItemContentSettingsQuantity = document.createElement('div');
        divCartItemContentSettingsQuantity.setAttribute('class', 'cart__item__content__settings__quantity');

        // Create Paragraphe Quantity
        const pParagrapheQuantity = document.createElement('p');
        pParagrapheQuantity.setAttribute('id','quantity');
        pParagrapheQuantity.innerText = total;

        // Create Input Quantity
        const inputQuantity = document.createElement('input');
        inputQuantity.setAttribute('type', 'number');
        inputQuantity.setAttribute('class', 'itemQuantity');
        inputQuantity.setAttribute('name', 'itemQuantity');
        inputQuantity.setAttribute('min', '1');
        inputQuantity.setAttribute('max', '100');
        inputQuantity.setAttribute('value', total);
        EventCart.inputModifyQuantity(id, color, inputQuantity);

        divCartItemContentSettingsQuantity.appendChild(pParagrapheQuantity);
        divCartItemContentSettingsQuantity.appendChild(inputQuantity);
        divCartItemContentSettings.appendChild(divCartItemContentSettingsQuantity);

        // Create DIV Cart Item Content Settings Delete
        const divCartItemContentSettingsDelete = document.createElement('div');
        divCartItemContentSettingsDelete.setAttribute('class', 'cart__item__content__settings__delete');

        // Create Paragraphe Delete Item
        const pParagrapheDeleteItem = document.createElement('p');
        pParagrapheDeleteItem.setAttribute('class', 'deleteItem');
        pParagrapheDeleteItem.innerText = 'Supprimer';
        CartEventDelete.eventDeleteProduct(pParagrapheDeleteItem);

        divCartItemContentSettingsDelete.appendChild(pParagrapheDeleteItem);
        divCartItemContentSettings.appendChild(divCartItemContentSettingsDelete);

        article.appendChild(divCartItemContentSettings);
        this.html.appendChild(article);
    }
}
