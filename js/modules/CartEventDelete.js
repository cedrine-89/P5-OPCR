import DeleteProductLocalStorage from "./DeleteProductLocalStorage.js";
import AlertValidation from "./AlertValidation.js";

export default class CartEventDelete {
    static eventDeleteProduct(elementEvent) {
        elementEvent.addEventListener('click', (e) => {

            let productDelete = e.target.parentNode.parentNode.parentNode
            let id = productDelete.getAttribute('data-id');
            let color = productDelete.getAttribute('data-color');

            if (AlertValidation.valid("Voulez vous vraiment supprimer ce Kanapé !")) {
                new DeleteProductLocalStorage(id, color);
                productDelete.remove();
            }
        });
    }
}
