/**
 * Create View Product Home
 */
export default class ViewProductAll {
    itemDom = document.getElementById("items");

    /**
     * Constructor ViewProduct
     * @param { {} } item
     */
    constructor(item) {
        // create article item <article>
        this.articleItem = document.createElement("article");
        // create article item <a>
        this.linkItem = this.createLinkItem(item._id);
        // Push Children article
        this.articleItem.appendChild(this.createImgItem(item.imageUrl, item.altTxt));
        this.articleItem.appendChild(this.createTitleItem(item.name));
        this.articleItem.appendChild(this.createParagraphItem(item.description));
        // Push Children link
        this.linkItem.appendChild(this.articleItem);
        // Push Children items
        this.itemDom.appendChild(this.linkItem);
    }

    /**
     * Create and @return link item <a>
     * @param id
     * @returns { HTMLAnchorElement }
     */
    createLinkItem(id) {
        let linkItem = document.createElement("a");
        linkItem.setAttribute("href", `./product.html?id=${id}`);
        return linkItem;
    }

    /**
     * Create and @return image item <img>
     * @param imageUrl
     * @param altTxt
     * @returns { HTMLImageElement }
     */
    createImgItem(imageUrl, altTxt) {
        let imgItem = document.createElement("img");
        imgItem.setAttribute("src", imageUrl);
        imgItem.setAttribute("alt", altTxt);
        return imgItem;
    }

    /**
     * Create and @return title item <h3>
     * @param name
     * @returns { HTMLHeadingElement }
     */
    createTitleItem(name) {
        let titleH3 = document.createElement("h3");
        titleH3.classList.add("productName");
        titleH3.innerText = name;
        return titleH3;
    }

    /**
     * Create and @return paragraph item <p>
     * @param description
     * @returns { HTMLParagraphElement }
     */
    createParagraphItem(description) {
        let pItem = document.createElement("p");
        pItem.classList.add("productDescription");
        pItem.innerText = `${description.substring(50, -1)}...`;
        return pItem;
    }
}
