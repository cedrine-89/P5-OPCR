import ViewProductDetail from "./modules/ViewProductDetail.js";

const url = "http://192.168.1.11:3000/api/products";
// Get param URL ?id=
const queryString = window.location.search;
// URLSearchParams => has / get
const urlParams = new URLSearchParams(queryString);

// Validation id in url
if (urlParams.has('id')) {
    // Get id
    let id = urlParams.get('id');
    // Fetch request
    let formatUrl = `${url}/${id}`;
    fetch(formatUrl)
        // get response to json
        .then(response => response.json())
        // get object json
        .then(response => new ViewProductDetail(response));
}
