export default class Api {
    urlProducts = "http://192.168.1.11:3000/api/products";
    error = false;

    getApi(url = undefined) {
        return fetch(url ? url : this.urlProducts)
            // get response to json
            .then(response => response.json())
            // get object json
            .then(response => {
                this.data = response;
            })
            .catch(e => {
                this.error = `Error: ${e}`;
            });
    }
}
