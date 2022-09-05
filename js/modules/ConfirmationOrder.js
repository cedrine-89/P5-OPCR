export default class ConfirmationOrder {
    queryString = window.location.search;
    orderId = document.querySelector('#orderId');

    constructor() {
        this.urlParams = new URLSearchParams(this.queryString);

        if (this.urlParams.has('id')) {
            this.orderId.innerText = this.urlParams.get('id');
        }
    }
}
