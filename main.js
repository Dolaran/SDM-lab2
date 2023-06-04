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

    insert(data, index) {
        const isString = typeof data;

        if (data && isString && data.length === 1) {
            if (index < 0 || index > this.list.length) {
                return 'Error. Index out of range.';
            }
            this.list.splice(index, 0, data);
        }
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

    get(index) {
        if (index < 0 || index >= this.list.length) {
            return null;
        }
        return this.list[index];
    }

    clone() {
        const newList = new List();
        let i = 0;
        while (i < this.list.length) {
            newList.append(this.list[i]);
            i++;
        }
        return newList;
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
        for (let i = 0; i < list.size(); i++) {
            this.list.push(list.get(i));
        }
        return this.list;
    }
}

module.exports = List;