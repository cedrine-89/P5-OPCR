import ViewProductDetail from "./modules/view/ViewProductDetail.js";
import EventAddCart from "./modules/event/EventAddCart.js";
import ValidatorID from "./modules/validator/ValidatorID.js";
import Api from "./modules/api/Api.js";

let validatorID = new ValidatorID();
let urlProduct = validatorID.getUrlProduct();
let api = new Api();

api.getApi(urlProduct)
    .then(() => {
        new EventAddCart(api.data);
        new ViewProductDetail(api.data);
    })
    .catch(e => window.location.replace("/"))
