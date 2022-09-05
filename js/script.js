import ViewProduct from "./modules/ViewProduct.js";
import Api from "./modules/Api.js";

const items = document.querySelector('#items');

let api = new Api();

api.getApi()
    .then(() => {
        for (const product of api.data) {
            new ViewProduct(product);
        }
    })
    .catch((e) => items.innerText = "Erreur au chargement des produits !");
