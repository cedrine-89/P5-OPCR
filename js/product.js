import ViewProductDetail from "./modules/ViewProductDetail.js";
import EventAddCart from "./modules/EventAddCart.js";
import ValidatorID from "./modules/ValidatorID.js";
import Api from "./modules/Api.js";

let validatorID = new ValidatorID();
let urlProduct = validatorID.getUrlProduct();
let api = new Api();

api.getApi(urlProduct)
    .then(() => {
        new EventAddCart(api.data);
        new ViewProductDetail(api.data);
    })
    .catch(e => window.location.replace("/"))
