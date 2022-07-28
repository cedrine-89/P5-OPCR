const url = "http://192.168.1.11:3000/api/products";
// Get param URL ?id=
const queryString = window.location.search;
// URLSearchParams => has / get
const urlParams = new URLSearchParams(queryString);

function createImgProduct(imageUrl, altTxt) {
    // create image product
    let itemImg = document.querySelector(".item__img");
    let imgItem = document.createElement("img");
    imgItem.setAttribute("src", imageUrl);
    imgItem.setAttribute("alt", altTxt);
    // Push children
    itemImg.appendChild(imgItem);
}

function createTitleProduct(name) {
    // create Name item
    let nameItem = document.querySelector("#title");
    nameItem.innerText = name;
}

function createPriceProduct(price) {
    // create price
    let priceItem = document.querySelector("#price");
    priceItem.innerText = price;
}

function createDescriptionProduct(description) {
    // create description
    let descItem = document.querySelector("#description");
    descItem.innerText = description;
}

function createColorsProduct(colors) {
    // For create option color
    for (const color of colors) {
        let colorSelect = document.querySelector("#colors");
        // create option
        let option = document.createElement("option");
        option.setAttribute("value", color);
        option.innerText = color;
        colorSelect.appendChild(option);
    }
}

function createHtmlProduct(product) {
    createImgProduct(product.imageUrl, product.altTxt);
    createTitleProduct(product.name);
    createPriceProduct(product.price);
    createDescriptionProduct(product.description);
    createColorsProduct(product.colors);
}

// Validation id in url
if (urlParams.has('id')) {
    // Get id
    let id = urlParams.get('id');
    // Fetch request
    fetch(url + "/" + id)
        // get response to json
        .then(response => response.json())
        // get object json
        .then(response => createHtmlProduct(response));
}
