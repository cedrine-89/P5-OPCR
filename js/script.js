import ViewProduct from "./modules/ViewProduct.js";
const url = "http://192.168.1.11:3000/api/products";

// Fetch request
fetch(url)
    // get response to json
    .then(response => response.json())
    // get object json
    .then(response => {
        // Iteration object in table
        for (const element of response) {
            new ViewProduct(element);
        }
    });
