class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class RingList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    size() {
        return this.length;
    }
    append(data) {
        const isString = typeof data === 'string';
        if (isString && data.length === 1) {
            const node = new Node(data);
            if (!this.head) {
                this.head = node;
            } else {
                this.tail.next = node;
            }
            node.next = this.head;
            this.tail = node;
            this.length++;
        } else {
            console.log('Error. Wrong input data type, expected type char.');
        }
    }
    insert(data, index) {
        const isString = typeof data === 'string';
        if (isString && data.length === 1) {
            if (index < 0 || index > this.length) {
                return false;
            }
            const node = new Node(data);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
                this.tail = node;
            } else if (index === this.length) {
                this.tail.next = node;
                this.tail = node;
                node.next = this.head;
            } else {
                let current = this.head;
                let i = 0;
                while (i < index - 1) {
                    current = current.next;
                    i++;
                }
                node.next = current.next;
                current.next = node;
            }
            this.length++;
        } else {
            console.log('Error. Wrong input data type, expected type char.');
        }
    }
    delete(index) {
        if (index < 0 || index >= this.length) {
            return 'Error. Index out of range.';
        }
        let deletedItem = null;
        if (this.length === 1) {
            deletedItem = this.head.data;
            this.head = null;
            this.tail = null;
        } else if (index === 0) {
            deletedItem = this.head.data;
            this.head = this.head.next;
            this.tail.next = this.head;
        } else {
            let current = this.head;
            let i = 0;
            while (i < index - 1) {
                current = current.next;
                i++;
            }
            deletedItem = current.next.data;
            current.next = current.next.next;
            if (index === this.length - 1) {
                this.tail = current;
            }
        }
        this.length--;
        return deletedItem;
    }
    deleteAll(data) {
        let current = this.head;
        let prev = this.tail;
        let i = 0;
        while (i < this.length) {
            if (current.data === data) {
                if (i === 0) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                    prev = this.tail;
                } else {
                    prev.next = current.next;
                    if (i === this.length - 1) {
                        this.tail = prev;
                    }
                }
                this.length--;
                i--;
            } else {
                prev = current;
            }
            current = current.next;
            i++;
        }
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    }
    clone() {
        const newList = new RingList();
        let current = this.head;
        let i = 0;
        while (i < this.length) {
            newList.append(current.data);
            current = current.next;
            i++;
        }
        return newList;
    }
    reverse() {
        let current = this.head;
        let prev = this.tail;
        let i = 0;
        while (i < this.length) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }
        this.head = prev;
        if (this.length > 0) {
            this.tail = this.head.next;
        }
    }

    findFirst(data) {
        let current = this.head;
        let i = 0;
        while (i < this.length) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
    findLast(data) {
        let current = this.head;
        let i = 0;
        let lastIndex = -1;
        while (i < this.length) {
            if (current.data === data) {
                lastIndex = i;
            }
            current = current.next;
            i++;
        }
        return lastIndex;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    extend(list) {
        let current = list.head;
        let i = 0;
        while (i < list.length) {
            this.append(current.data);
            current = current.next;
            i++;
        }
    }
}

module.exports = RingList;