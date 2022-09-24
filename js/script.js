import ViewProductAll from "./modules/view/ViewProductAll.js";
import Api from "./modules/api/Api.js";

const items = document.querySelector('#items');
let api = new Api();

api.getApi()
    .then(() => {
        for (const product of api.data) {
            new ViewProductAll(product);
        }
    })
    .catch((e) => items.innerText = "Erreur au chargement des produits !");
