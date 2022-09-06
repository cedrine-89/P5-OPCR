export default class FormSubmitCommand {
    urlOrder = "http://192.168.1.11:3000/api/products/order";
    nameObjectStorage = 'Products';

    /**
     * Create event submit formulaire and redirect URL with param orderId
     */
    constructor() {
        this.form = document.querySelector('#submitCommand');

        this.form.addEventListener('submit', async (e) => {
            // Stop Propagation formulaire
            e.preventDefault();

            const cartLocalStorage = JSON.parse(localStorage.getItem(this.nameObjectStorage));
            let idProductForOrder = [];

            cartLocalStorage.forEach(product => {
                const [id, color] = product.id.split('-');
                idProductForOrder.push(id);

            });

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
        });
    }
}
