export default class AlertProduct {
    /**
     * View error in DOM
     * @param { Element } selector
     * @param { String } message
     */
    constructor(selector, message) {
        this.html = selector;
        this.div = document.createElement('div');
        const br = document.createElement('br');
        const span = document.createElement('span');

        span.setAttribute('style', `color:#FFF;`);
        span.innerHTML = message;
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
