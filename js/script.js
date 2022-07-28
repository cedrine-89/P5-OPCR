const url = "http://192.168.1.11:3000/api/products";

function createLinkItem(id) {
    // create and @return link item <a>
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", "./product.html?id=" + id);
    return linkItem;
    //linkItem.setAttribute("href", "./product.html?id=" + item._id);
}

function createImgItem(imageUrl, altTxt) {
    // create and @return image item <img>
    let imgItem = document.createElement("img");
    imgItem.setAttribute("src", imageUrl);
    imgItem.setAttribute("alt", altTxt);
    return imgItem;
}

function createTitleItem(name) {
    //create and @return title item <h3>
    let titleH3 = document.createElement("h3");
    titleH3.classList.add("productName");
    titleH3.innerText = name;
    return titleH3;
}

function createParagraphItem(description) {
    // create and @return paragraph item <p>
    let pItem = document.createElement("p");
    pItem.classList.add("productDescription");
    pItem.innerText = description;
    return pItem;
}

function createHtmlItems(item) {
    // select DOM
    let items = document.getElementById("items");
    // create article item <article>
    let articleItem = document.createElement("article");
    let linkItem = createLinkItem(item._id);
    // Push Children article
    articleItem.appendChild(createImgItem(item.imageUrl, item.altTxt));
    articleItem.appendChild(createTitleItem(item.name));
    articleItem.appendChild(createParagraphItem(item.description));
    // Push Children link
    linkItem.appendChild(articleItem);
    // Push Children items
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
            createHtmlItems(element);
        }
    });
