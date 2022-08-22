export default class AddCart {
    nameObjectStorage = 'Products';

    constructor(itemID, itemTotal, itemColor) {
        this.itemID = itemID;
        this.itemTotal = parseInt(itemTotal);
        this.itemColor = itemColor;
        this.localStorage = this.getLocalStorage();
        this.addLocalStorage();
    }

    getLocalStorage() {
        return localStorage.getItem(this.nameObjectStorage);
    }

    addLocalStorage() {
        // Object new data
        let data = {
            id: `${this.itemID}-${this.itemColor}`,
            total: this.itemTotal
        };
        // Object Cart Data
        let cartData = JSON.parse(this.localStorage);

        if (cartData !== null) {
            // Validator Data Exist
            let validCartExist = false;

            for (const cartD of cartData) {
                // Destructuring Cart Data
                const [id, color] = cartD.id.split('-');
                // If Data Exist
                if (id === this.itemID && color === this.itemColor) {
                    cartD.total = parseInt(cartD.total) + this.itemTotal;
                    validCartExist = true;
                }
            }

            // Push Data No Exist
            if (!validCartExist) {
                cartData.push(data);
            }

            let dataJson = JSON.stringify(cartData);
            localStorage.setItem(this.nameObjectStorage, dataJson);

        } else {
            let dataFormat = JSON.stringify([data]);
            localStorage.setItem(this.nameObjectStorage, dataFormat);
        }
    }
}
