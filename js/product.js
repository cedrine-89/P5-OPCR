import ViewProductDetail from "./modules/ViewProductDetail.js";
import ValidatorID from "./modules/ValidatorID.js";
import Api from "./modules/Api.js";

let validatorID = new ValidatorID();
let urlProduct = validatorID.getUrlProduct();
let api = new Api();

api.getApi(urlProduct)
    .then(() => {
        new ViewProductDetail(api.data);
    });
