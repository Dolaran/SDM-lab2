class List {
    constructor() {
        this.list = [];
    }
        
    size() {
        return this.list.length;
    }

    append(data) {
        const isString = typeof data;

        if (data && isString && data.length === 1) {
            this.list.push(data);
        }
    }

    insert() {

    }
    delete(index) {
        if (index < 0 || index >= this.list.length) {
            return 'Error. Index out of range.';
        }
        return this.list.splice(index, 1)[0];
    }

    deleteAll(data) {
        const filteredList = this.list.filter((element) => element !== data);
        this.list = filteredList;
    }

    get() {

    }

    clone() {

    }

    reverse() {
        this.list.reverse();
    }

    findFirst() {

    }

    findLast() {

    }

    clear() {
        this.list = [];
    }

    extend() {

    }
}

module.exports = List;