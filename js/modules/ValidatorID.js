export default class ValidatorID {
    urlApi = "http://192.168.1.11:3000/api/products";
    queryString = window.location.search;
    regexp = new RegExp(/^\w*$/);

    constructor() {
        this.urlParams = new URLSearchParams(this.queryString);
        this.init();
    }

    /**
     * Initialize Validator ID in URL
     */
    init() {
        // Valid ID in URL
        if (this.urlParams.has('id')) {
            this.id = this.urlParams.get('id');
            this.isValidID();
        } else {
            window.location.replace("/html");
        }
    }

    /**
     * Validator RegExp => ID \w
     */
    isValidID() {
        if (this.regexp.test(this.id)) {
            this.url = `${this.url}/${this.id}`;
        } else {
            // TODO Gestion error
            console.log('ID: Not Valid');
        }
    }

    /**
     * Return URL Valid product
     * @returns { string }
     */
    getUrlProduct() {
        return `${this.urlApi}/${this.id}`;
    }
}
