import AddCartLocalStorage from "./AddCartLocalStorage.js";
import Cart from "./Cart.js";

export default class EventCart {
    /**
     *
     * @param { String } id
     * @param { String } color
     * @param { HTMLDocument } elementEvent
     */
    static inputModifyQuantity(id, color, elementEvent) {
        elementEvent.addEventListener('change', (e) => {
            new AddCartLocalStorage(id, e.target.value, color, true);
            new Cart();
        }, false);
    }
}
