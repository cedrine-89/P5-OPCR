import ValidatorDataEventCart from "./ValidatorDataEventCart.js";
import AlertProduct from "./AlertProduct.js";

export default class AddCartLocalStorage {
    nameObjectStorage = 'Products';

    constructor(itemID, itemTotal, itemColor) {
        this.itemID = itemID;
        this.itemTotal = parseInt(itemTotal);
        this.itemColor = itemColor;
        this.addLocalStorage();
    }

    addLocalStorage() {
        // Object new data
        let data = {
            id: `${this.itemID}-${this.itemColor}`,
            total: this.itemTotal
        };
        // Object Cart Data
        let cartData = JSON.parse(localStorage.getItem(this.nameObjectStorage));
        let dataJson = [data];

        if (cartData) {
            if (cartData.find(item => item.id === data.id)) {
                cartData = cartData.map(item => {
                    if (item.id === data.id) {
                        const quantity = item.total + data.total;

                        if (!this.validQuantity(quantity)) {
                            new AlertProduct('Quantité invalide !');
                        } else {
                            item.total = quantity;
                        }
                    }
                    return item;
                })
            } else {
                cartData.push(data);
            }
            dataJson = cartData;
        }
        localStorage.setItem(this.nameObjectStorage, JSON.stringify(dataJson));
    }

    validQuantity(data) {
        return new ValidatorDataEventCart(data).isQuantityValid();
    }
}
