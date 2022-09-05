import MoneyChain from "./MoneyChain.js";

export default class CartTotal {
    constructor() {
        this.totalQuantity = 0
        this.totalPrice = 0;
    }

    addProducts(total, price) {
        const totalQuantityDOM = document.querySelector('#totalQuantity');
        const totalPriceDOM = document.querySelector('#totalPrice');

        this.totalQuantity += total
        this.totalPrice += total * price;

        totalQuantityDOM.innerText = this.totalQuantity;
        totalPriceDOM.innerText = MoneyChain.convert(this.totalPrice);
    }
}
