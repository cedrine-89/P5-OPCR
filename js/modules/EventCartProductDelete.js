import DeleteProductLocalStorage from "./DeleteProductLocalStorage.js";

export default class EventCartProductDelete {
    constructor() {
        const elementEvent = document.querySelectorAll(`.deleteItem`);

        elementEvent.forEach(el => {
            el.addEventListener('click', (e) => {
                const node = e.target.parentNode.parentNode.parentNode.parentNode;
                const id = node.getAttribute('data-id');
                const color = node.getAttribute('data-color');

                new DeleteProductLocalStorage(id, color);
                node.remove();
            }, false);
        });
    }
}
