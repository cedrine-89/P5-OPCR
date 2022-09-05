import ValidatorDataEventCart from "./ValidatorDataEventCart.js";
import AddCartLocalStorage from "./AddCartLocalStorage.js";
import AlertProduct from "./AlertProduct.js";
import AlertValidation from "./AlertValidation.js";

export default class EventAddCart {
    addToCart = document.querySelector('#addToCart');
    itemQuantity = document.querySelector('#itemQuantity');

    constructor(item) {
        this.item = item;
        this.isDataValid();
    }

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
                        new AddCartLocalStorage(this.item._id, this.validatorData.data, validColor);
                        if (AlertValidation.valid("Voulez vous allez à votre panier ? ou annuler pour continuer vos achats.")) {
                            window.location.replace("cart.html");
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

    colorProduct() {
        this.colors = document.querySelector('#colors');

        if (this.validatorData.validColor(this.colors.value)) {
            return this.colors.value;
        } else {
            return false;
        }
    }
}
