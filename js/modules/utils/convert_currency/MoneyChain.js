// noinspection JSCheckFunctionSignatures IDE

export default class MoneyChain {
    /**
     * Format String to Money Chain
     * @param { Number } number
     * @returns { string }
     */
    static convert(number) {
        return number.toLocaleString('fr-FR', {style: 'currency',currency: 'EUR', minimumFractionDigits: 2})
    }
}
