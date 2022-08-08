import ValidatorDataEventCart from "./ValidatorDataEventCart.js";

export default class EventAddCart {
    addToCart = document.querySelector('#addToCart');

    constructor(item) {
        this.item = item;
        this.isDataValid();
    }

    isDataValid() {
        this.itemQuantity = document.querySelector('#itemQuantity');

        this.addToCart.addEventListener('click', () => {
            let validatorData = new ValidatorDataEventCart(this.itemQuantity.value);
            let validNumber = validatorData.isValidNumber();
            let validQuantity = validatorData.isQuantityValid();

            if (validNumber) {
                if (validQuantity) {
                    console.log('On commande !!', this.item);
                } else {
                    console.error("Erreur le total doit être entre 1 et 100");
                }
            } else {
                console.error("Ce n'est pas un nombre !!");
            }
        });
    }
}
