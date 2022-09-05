import AddCartLocalStorage from "./AddCartLocalStorage.js";
import Cart from "./Cart.js";

export default class EventCart {
    static inputModifyQuantity(id, color, elementEvent) {
        elementEvent.addEventListener('change', (e) => {
            new AddCartLocalStorage(id, e.target.value, color, true);
            new Cart();
        }, false);
    }
}
