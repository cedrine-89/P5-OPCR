import ValidatorDataEventCart from "./ValidatorDataEventCart.js";
import AddCartLocalStorage from "./AddCartLocalStorage.js";
import AlertProduct from "./AlertProduct.js";

export default class EventAddCart {
    addToCart = document.querySelector('#addToCart');
    itemQuantity = document.querySelector('#itemQuantity');

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
                        if (!addCartLocalStorage.error) {
                            new AlertProduct('Produit ajouter à votre panier.');
                        }
                    } else {
                        new AlertProduct('Couleur Invalide !');
                    }
                } else {
                    new AlertProduct('Quantité invalide !');
                }
            } else {
                new AlertProduct('Erreur: veuillez soumettre un nombre !');
            }
        });
    }

    /**
     *
     * @returns { String|boolean }
     */
    colorProduct() {
        this.colors = document.querySelector('#colors');

        if (this.validatorData.validColor(this.colors.value)) {
            return this.colors.value;
        } else {
            return false;
        }
    }
}
