/**
 * ValidatorID and set UrlProduct for getUrlProduct
 */
export default class ValidatorID {
    urlApi = "http://localhost:3000/api/products";
    queryString = window.location.search;
    regexp = new RegExp(/^\w*$/);

    /**
     * Validator ID if in URL
     * Validator ID not include spécial char
     * Else redirect to Home
     */
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
            window.location.replace("/");
        }
    }

    /**
     * Validator RegExp => ID \w
     */
    isValidID() {
        if (this.regexp.test(this.id)) {
            this.url = `${this.url}/${this.id}`;
        } else {
            window.location.replace("/");
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
