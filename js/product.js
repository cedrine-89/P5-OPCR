const url = "http://192.168.1.11:3000/api/products";
// Get param ?id=
const queryString = window.location.search;
// URLSearchParams => has / get
const urlParams = new URLSearchParams(queryString);

function viewItem(item) {
    // create image item
    let imgItem = document.createElement("img");
    imgItem.setAttribute("src", item.imageUrl);
    imgItem.setAttribute("alt", item.altTxt);
    // Select parent img
    let itemImg = document.querySelector(".item__img");
    // Push children
    itemImg.appendChild(imgItem);
    // create Name item
    let nameItem = document.querySelector("#title");
    nameItem.innerText = item.name;
    // create price
    let priceItem = document.querySelector("#price");
    priceItem.innerText = item.price;
    // create description
    let descItem = document.querySelector("#description");
    descItem.innerText = item.description;
    // create option color
    for (const color of item.colors) {
        let option = document.createElement("option");
        option.setAttribute("value", color);
        option.innerText = color;
        let colorSelect = document.querySelector("#colors");
        colorSelect.appendChild(option);
    }
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
        .then(response => viewItem(response));
}
