import Cart from "./Cart.js";
import CartTotal from "./CartTotal.js";

export default class DeleteProductLocalStorage {
    nameObjectStorage = 'Products';

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
        new Cart();
        new CartTotal();
    }
}
