import ViewProduct from "./modules/ViewProduct.js";
import Api from "./modules/Api.js";

let api = new Api();

api.getApi()
    .then(() => {
        for (const product of api.data) {
            new ViewProduct(product);
        }
    });
