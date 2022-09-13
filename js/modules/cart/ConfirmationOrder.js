export default class ConfirmationOrder {
    queryString = window.location.search;
    orderId = document.querySelector('#orderId');

    /**
     * Confirmation Order ID in URL and View ID in DOM
     */
    constructor() {
        this.urlParams = new URLSearchParams(this.queryString);

        if (this.urlParams.has('id')) {
            this.orderId.innerText = this.urlParams.get('id');
        } else {
            window.location.replace(`/`);
        }
    }
}
