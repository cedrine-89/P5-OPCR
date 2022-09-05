export default class ViewProductDetail {

    /**
     * Constructor ViewProductDetail
     * @param { {} } item
     */
    constructor(item) {
        // Change title page
        document.title = item.name;

        this.createImgProduct(item.imageUrl, item.altTxt);
        this.createTitleProduct(item.name);
        this.createPriceProduct(item.price);
        this.createDescriptionProduct(item.description);
        this.createColorsProduct(item.colors);
    }

    /**
     * Create image product
     * @param { String } imageUrl
     * @param { String } altTxt
     */
    createImgProduct(imageUrl, altTxt) {
        let itemImg = document.querySelector(".item__img");
        let imgItem = document.createElement("img");
        imgItem.setAttribute("src", imageUrl);
        imgItem.setAttribute("alt", altTxt);
        // Push children
        itemImg.appendChild(imgItem);
    }

    /**
     * Create Name item
     * @param { String } name
     */
    createTitleProduct(name) {
        let nameItem = document.querySelector("#title");
        nameItem.innerText = name;
    }

    /**
     * Create price
     * @param { String } price
     */
    createPriceProduct(price) {
        let priceItem = document.querySelector("#price");
        priceItem.innerText = price;
    }

    /**
     * Create description
     * @param { String } description
     */
    createDescriptionProduct(description) {
        let descItem = document.querySelector("#description");
        descItem.innerText = description;
    }

    /**
     * FOR Create option color
     * @param { Array } colors
     */
    createColorsProduct(colors) {
        for (const color of colors) {
            let colorSelect = document.querySelector("#colors");
            let option = document.createElement("option");
            option.setAttribute("value", color);
            option.innerText = color;
            colorSelect.appendChild(option);
        }
    }
}
