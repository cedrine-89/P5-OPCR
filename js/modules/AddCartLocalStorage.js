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
                        item.total += data.total
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
}
