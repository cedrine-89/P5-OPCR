export default class Cart {
    nameObjectStorage = 'Products';

    constructor() {
        this.localStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));
        this.viewCart();
    }

    viewCart() {
        this.localStorage.forEach(product => {
            console.log(product);
        });
    }
}
