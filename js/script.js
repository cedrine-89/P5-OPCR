const url = "http://192.168.1.11:3000/api/products";

function viewItems(item) {
    // select DOM
    let items = document.getElementById("items");
    // create link item <a>
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", "./product.html?id=" + item._id);
    // create article item <article>
    let articleItem = document.createElement("article");
    // create image item <img>
    let imgItem = document.createElement("img");
    imgItem.setAttribute("src", item.imageUrl);
    imgItem.setAttribute("alt", item.altTxt);
    //create title item <h3>
    let titleH3 = document.createElement("h3");
    titleH3.classList.add("productName");
    titleH3.innerText = item.name;
    // create paragraph item <p>
    let pItem = document.createElement("p");
    pItem.classList.add("productDescription");
    pItem.innerText = item.description;

    // Push Children
    articleItem.appendChild(imgItem);
    articleItem.appendChild(titleH3);
    articleItem.appendChild(pItem);
    linkItem.appendChild(articleItem);
    // Push All Children
    items.appendChild(linkItem);
}

// Fetch request
fetch(url)
    // get response to json
    .then(response => response.json())
    // get object json
    .then(response => {
        // Iteration object in table
        for (const element of response) {
            viewItems(element);
        }
    });
