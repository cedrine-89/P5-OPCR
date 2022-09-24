import MoneyChain from "./../utils/convert_currency/MoneyChain.js";

export default class CartTotal {
    /**
     * Calcul Total product and total Price in Cart
     */
    constructor() {
        this.totalQuantity = 0
        this.totalPrice = 0;
    }

    /**
     * Add Product and calcul total Price
     * @param { Number } total
     * @param { Number } price
     */
    addProducts(total, price) {
        const totalQuantityDOM = document.querySelector('#totalQuantity');
        const totalPriceDOM = document.querySelector('#totalPrice');

        this.totalQuantity += total
        this.totalPrice += total * price;

        totalQuantityDOM.innerText = this.totalQuantity;
        totalPriceDOM.innerText = MoneyChain.convert(this.totalPrice);
    }
}
