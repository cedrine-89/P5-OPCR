import ValidatorDataEventCart from "./../validator/ValidatorDataEventCart.js";
import AddCartLocalStorage from "./../local_storage/AddCartLocalStorage.js";
import AlertProduct from "./../alert/AlertProduct.js";

export default class EventAddCart {
    colors = document.querySelector('#colors');
    addToCart = document.querySelector('#addToCart');
    itemQuantity = document.querySelector('#itemQuantity');
    htmlErrorDOM = document.querySelector(".item__content__settings__quantity");
    /**
     * Event add Product in Cart
     * @param { {} } item
     */
    constructor(item) {
        this.item = item;
        this.isDataValid();
    }

    /**
     * Valid data event Color, Quantity, IsNumber
     */
    isDataValid() {
        this.itemQuantity = document.querySelector('#itemQuantity');
        this.addToCart.addEventListener('click', () => {
            this.validatorData = new ValidatorDataEventCart(this.itemQuantity.value);
            let validNumber = this.validatorData.isValidNumber();
            let validQuantity = this.validatorData.isQuantityValid();
            let validColor = this.colorProduct();
            if (validNumber) {
                if (validQuantity) {
                    if (validColor) {
                        const addCartLocalStorage = new AddCartLocalStorage(this.item._id, this.validatorData.data, validColor);
                        // Validator Total product in cart + product add
                        if (!addCartLocalStorage.error) {
                            new AlertProduct(this.htmlErrorDOM,'Produit ajouter à votre panier.');
                            this.colors.value = '';
                            this.itemQuantity.value = '0';
                        } else {
                            new AlertProduct(this.htmlErrorDOM,`Vous avez déjà ${addCartLocalStorage.error} Kanapé de ce même modèle & couleur dans votre panier !<br>La quantité maximale est de 100 unités.`);
                        }
                    } else {
                        new AlertProduct(this.htmlErrorDOM,'Couleur Invalide !');
                    }
                } else {
                    new AlertProduct(this.htmlErrorDOM,'Quantité invalide !');
                }
            } else {
                new AlertProduct(this.htmlErrorDOM,'Erreur: veuillez soumettre un nombre !');
            }
        });
    }

    /**
     *
     * @returns { String|boolean }
     */
    colorProduct() {
        if (this.validatorData.validColor(this.colors.value)) {
            return this.colors.value;
        } else {
            return false;
        }
    }
}
