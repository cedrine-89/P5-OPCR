// noinspection JSCheckFunctionSignatures IDE

export default class MoneyChain {
    static convert(number) {
        return number.toLocaleString('fr-FR', {style: 'currency',currency: 'EUR', minimumFractionDigits: 2})
    }
}
