export default class AlertValidation {
    /**
     * Alert Validation and Return confirm
     * @param { String } message
     * @returns { boolean }
     */
    static valid(message) {
        return confirm(message);
    }
}
