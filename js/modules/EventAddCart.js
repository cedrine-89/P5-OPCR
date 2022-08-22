import ValidatorDataEventCart from "./ValidatorDataEventCart.js";
import AddCart from "./AddCart.js";

export default class EventAddCart {
    addToCart = document.querySelector('#addToCart');

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
                        new AddCart(this.item._id, this.validatorData.data, validColor);
                    } else {
                        console.error('Invalid Color !')
                    }
                } else {
                    console.error("TODO: Erreur le total doit être entre 1 et 100");
                }
            } else {
                console.error("TODO: Ce n'est pas un nombre !!");
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
