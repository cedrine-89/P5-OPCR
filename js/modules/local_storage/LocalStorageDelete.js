export default class LocalStorageDelete {
    nameObjectStorage = 'Products';

    constructor() {
        localStorage.removeItem(this.nameObjectStorage);
    }
}
