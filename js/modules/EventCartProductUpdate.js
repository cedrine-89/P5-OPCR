import AddCartLocalStorage from "./AddCartLocalStorage.js";
import Cart from "./Cart.js";

export default class EventCartProductUpdate {
    /**
     *
     */
    constructor() {
        const elementEvent = document.querySelectorAll(`.itemQuantity`);

        elementEvent.forEach(el => {
            el.addEventListener('change', (e) => {
                const node = e.target.parentNode.parentNode.parentNode.parentNode;
                const id = node.getAttribute('data-id');
                const color = node.getAttribute('data-color');

                new AddCartLocalStorage(id, e.target.value, color, true);
                new Cart();
            }, false);
        });
    }
}
