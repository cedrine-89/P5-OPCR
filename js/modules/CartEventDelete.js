import DeleteProductLocalStorage from "./DeleteProductLocalStorage.js";

export default class CartEventDelete {
    static eventDeleteProduct(elementEvent) {
        elementEvent.addEventListener('click', (e) => {

            let productDelete = e.target.parentNode.parentNode.parentNode
            let id = productDelete.getAttribute('data-id');
            let color = productDelete.getAttribute('data-color');

            if (this.validDelete()) {
                new DeleteProductLocalStorage(id, color);
                productDelete.remove();
            }
        });
    }

    static validDelete() {
        return confirm("Voulez vous vraiment supprimer ce Kanapé !");
    }
}
