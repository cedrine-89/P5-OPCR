import AddCartLocalStorage from "./../local_storage/AddCartLocalStorage.js";
import Cart from "./../cart/Cart.js";
import AlertProduct from "./../alert/AlertProduct.js";

export default class EventCartProductUpdate {
    constructor() {
        const elementEvent = document.querySelectorAll(`.itemQuantity`);

        elementEvent.forEach(el => {
            el.addEventListener('change', (e) => {
                const node = e.target.parentNode.parentNode.parentNode.parentNode;
                const id = node.getAttribute('data-id');
                const color = node.getAttribute('data-color');
                const addCartLocalStorage = new AddCartLocalStorage(id, e.target.value, color, true);

                if (addCartLocalStorage.error) {
                    new AlertProduct(e.target.parentNode, 'Quantité invalide ! !');
                } else {
                    new Cart();
                }
            }, false);
        });
    }
}
