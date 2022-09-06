export default class ValidatorDataEventCart {

    /**
     * Validator isValidNumber, isQuantityValid, validColor
     * @param { String|Number } data
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * Valid and return is Number
     * @returns { boolean }
     */
    isValidNumber() {
        this.regExp = new RegExp( /^\d*$/g);
        return this.regExp.test(this.data);
    }

    /**
     * Valid Number range 0 to 100
     * @returns { boolean }
     */
    isQuantityValid() {
        return this.data > 0 && this.data <= 100;
    }

    /**
     * Valid Color is String
     * @param { String } value
     * @returns { boolean }
     */
    validColor(value) {
        this.regExp = new RegExp( /^\s*/g);
        return this.regExp.test(value);
    }
}
