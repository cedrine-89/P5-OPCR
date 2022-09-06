export default class FormSubmitCommand {
    urlOrder = "http://192.168.1.11:3000/api/products/order";
    nameObjectStorage = 'Products';
    firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
    lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
    addressErrorMsg = document.querySelector('#addressErrorMsg');
    cityErrorMsg = document.querySelector('#cityErrorMsg');
    emailErrorMsg = document.querySelector('#emailErrorMsg');

    regExpString = new RegExp(/\d+/g);
    regExpAddress = new RegExp(/^\s/g);
    regExpCity = new RegExp(/[a-zA-Z]+/g);
    regExpEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

    error = false;

    /**
     * Create event submit formulaire and redirect URL with param orderId
     */
    constructor() {
        this.form = document.querySelector('#submitCommand');

        this.form.addEventListener('submit', async (e) => {
            // Stop Propagation formulaire
            e.preventDefault();

            const cartLocalStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));
            // Create table of Product-ID for Order
            let idProductForOrder = [];

            // Push Product ID in idProductForOrder
            cartLocalStorage.forEach(product => {
                const [id, color] = product.id.split('-');
                idProductForOrder.push(id);

            });

            const firstName = document.querySelector('#firstName').value;
            const lastName = document.querySelector('#lastName').value;
            const address = document.querySelector('#address').value;
            const city = document.querySelector('#city').value;
            const email = document.querySelector('#email').value;


            if (this.regExpString.test(firstName)) {
                this.firstNameErrorMsg.innerText = 'Erreur pas de chiffre dans votre Prénom';
                this.regExpString = new RegExp(/\d+/g);
                this.error = true;
            } else {
                this.firstNameErrorMsg.innerText = '';
                this.error = false;
            }

            if (this.regExpString.test(lastName)) {
                this.lastNameErrorMsg.innerText = 'Erreur pas de chiffre dans votre Nom';
                this.regExpString = new RegExp(/\d+/g);
                this.error = true;
            } else {
                this.lastNameErrorMsg.innerText = '';
                this.error = false;
            }

            if (this.regExpAddress.test(address)) {
                this.addressErrorMsg.innerText = 'Erreur votre Adresse ne doit pas commencer par un espace';
                this.error = true;
            } else {
                this.addressErrorMsg.innerText = '';
                this.error = false;
            }

            if (this.regExpCity.test(city)) {
                this.cityErrorMsg.innerText = '';
                this.error = false;
            } else {
                this.cityErrorMsg.innerText = 'Erreur veuillez entrer que des lettres pour votre Ville';
                this.error = true;
            }

            if (this.regExpEmail.test(email)) {
                this.emailErrorMsg.innerText = '';
                this.error = false;
            } else {
                this.emailErrorMsg.innerText = 'Erreur l\'adresse email est invalide !';
                this.error = true;
            }

            if (!this.error) {
                const bodyData = {
                    contact: {
                        firstName: document.querySelector('#firstName').value,
                        lastName: document.querySelector('#lastName').value,
                        address: document.querySelector('#address').value,
                        city: document.querySelector('#city').value,
                        email: document.querySelector('#email').value
                    },
                    products: idProductForOrder
                }

                const optionsPost = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                }

                const getPostResponse = await fetch(this.urlOrder, optionsPost);
                const response = await getPostResponse.json();

                window.location.replace(`confirmation.html?id=${response.orderId}`);
            }
        });
    }
}
