import ValidatorDataEventCart from "./ValidatorDataEventCart.js";
import AlertProduct from "./AlertProduct.js";

export default class AddCartLocalStorage {
    nameObjectStorage = 'Products';

    constructor(itemID, itemTotal, itemColor, updateCart = false) {
        this.itemID = itemID;
        this.itemTotal = parseInt(itemTotal);
        this.itemColor = itemColor;
        this.updateCart = updateCart;
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

        // IF cartData in localStorage
        if (cartData) {
            // Find Item id exist
            if (cartData.find(item => item.id === data.id)) {
                // Map for modify total product
                cartData = cartData.map(item => {
                    if (item.id === data.id) {
                        let quantity;

                        // If update cart no addition
                        if (this.updateCart) {
                            quantity = data.total;
                        } else {
                            quantity = item.total + data.total;
                        }

                        // Valid total <= 100
                        if (!this.validQuantity(quantity)) {
                            new AlertProduct('Quantité invalide !');
                        } else {
                            item.total = quantity;
                        }
                    }
                    return item;
                })
            } else {
                // If no exist Push un table for localStorage
                cartData.push(data);
            }
            // Modify cartData after update
            dataJson = cartData;
        }
        localStorage.setItem(this.nameObjectStorage, JSON.stringify(dataJson));
    }

    validQuantity(data) {
        return new ValidatorDataEventCart(data).isQuantityValid();
    }
}
