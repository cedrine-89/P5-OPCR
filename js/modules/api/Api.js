export default class Api {
    urlProducts = "http://localhost:3000/api/products";
    error = false;

    /**
     * get API
     * @param { String|undefined } url
     * @returns { Promise<any> }
     */
    getApi(url = undefined) {
        return fetch(url ? url : this.urlProducts)
            // get response to json
            .then(response => response.json())
            // get object json
            .then(response => this.data = response)
            .catch(e => this.error = `Error: ${e}`);
    }
}
