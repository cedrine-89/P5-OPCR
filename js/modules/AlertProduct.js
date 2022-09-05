export default class AlertProduct {
    constructor(message) {
        this.html = document.querySelector(".item__content__settings__quantity");
        this.div = document.createElement('div');
        const br = document.createElement('br');
        const span = document.createElement('span');

        span.setAttribute('style', `color:#FFF;`);
        span.innerText = message;
        this.div.appendChild(br);
        this.div.appendChild(span);
        this.html.appendChild(this.div);
        this.hiddenAlert();
    }

    /**
     * Hidden alert 3000ms
     */
    hiddenAlert() {
        setTimeout(() => this.div.remove(), 5000);
    }
}
