export default class ValidatorDataEventCart {

    constructor(data) {
        this.data = data;
    }

    isValidNumber() {
        this.regExp = new RegExp( /^\d*$/g);
        return this.regExp.test(this.data);
    }

    isQuantityValid() {
        this.regExp = new RegExp(/^([1-9][0-9]?|100)$/g);
        return this.regExp.test(this.data);
    }

    validColor(value) {
        this.regExp = new RegExp( /^\s*/g);
        return this.regExp.test(value);
    }
}
