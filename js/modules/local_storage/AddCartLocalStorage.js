import ValidatorDataEventCart from "./../validator/ValidatorDataEventCart.js";

export default class AddCartLocalStorage {
    nameObjectStorage = 'Products';
    error = false;

    /**
     *
     * @param { String } itemID
     * @param { Number|String } itemTotal
     * @param { String } itemColor
     * @param { Boolean } updateCart
     */
    constructor(itemID, itemTotal, itemColor, updateCart = false) {
        this.itemID = itemID;
        this.itemTotal = parseInt(itemTotal);
        this.itemColor = itemColor;
        this.updateCart = updateCart;
        this.addLocalStorage();
    }

    /**
     * Set or Update LocalStorage
     */
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
                    const [id, color] = item.id.split('-');
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
                            this.error = item.total;
                        } else {
                            this.error = false;
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

    /**
     * Validator Quantity
     * @param data
     * @returns { Boolean }
     */
    validQuantity(data) {
        return new ValidatorDataEventCart(data).isQuantityValid();
    }
}
