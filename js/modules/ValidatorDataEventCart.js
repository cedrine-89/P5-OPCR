export default class ValidatorDataEventCart {

    constructor(data) {
        this.data = data;
    }

    isValidNumber() {
        this.regExp = new RegExp( /^\d*$/g);
        return this.regExp.test(this.data);
    }

    isQuantityValid() {
        this.regExpQuantity = new RegExp(/^([1-9][0-9]?|100)$/g);
        return this.regExpQuantity.test(this.data);
    }
}
