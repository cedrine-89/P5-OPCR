export default class ValidatorDataEventCart {

    constructor(data) {
        this.data = data;
    }

    isValidNumber() {
        this.regExp = new RegExp( /^\d*$/g);
        return this.regExp.test(this.data);
    }

    isQuantityValid() {
        return this.data <= 100;
    }

    validColor(value) {
        this.regExp = new RegExp( /^\s*/g);
        return this.regExp.test(value);
    }
}
