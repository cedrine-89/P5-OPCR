import Cart from "./../cart/Cart.js";
import CartTotal from "./../cart/CartTotal.js";

export default class DeleteProductLocalStorage {
    nameObjectStorage = 'Products';

    /**
     * Delete product in localStorage
     * @param { String } id
     * @param { String } color
     */
    constructor(id, color) {
        this.localStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));
        const idFormat = `${id}-${color}`;
        let newCart = [];

        if (this.localStorage.find(item => item.id === idFormat)) {
            this.localStorage.map(item => {
                if (item.id !== idFormat) {
                    newCart.push(item);
                }
            });
        }

        localStorage.removeItem(this.nameObjectStorage);
        localStorage.setItem(this.nameObjectStorage, JSON.stringify(newCart));
        // New View Cart after modify
        new Cart();
        // New View Total Cart after modify
        new CartTotal();
    }
}
