const List = require('./main.js');

describe('size()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should return 0 for an empty list', () => {
        expect(list.size()).toEqual(0);
    });

    it('should return the number of elements in the list', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        expect(list.size()).toEqual(3);
    });

    it('should return 1 for a list with only one element', () => {
        list.append('1');
        expect(list.size()).toEqual(1);
    });
});

describe('append()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should append a new node to an empty list', () => {
        list.append('1');
        expect(list.get(0)).toBe('1');
        expect(list.size()).toBe(1);
    });

    it('should append a new node to a non-empty list', () => {
        list.append('1');
        list.append('2');
        expect(list.size()).toBe(2);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
    });

    it('should not append a new node to an empty list with not correct datatype', () => {
        list.append(1);
        list.append('12');
        list.append(true);
        list.append(undefined);
        list.append(null);
        list.append({ a: 1 });
        expect(list.size()).toBe(0);
    });
});

describe('insert()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should insert at the beginning of an empty list', () => {
        list.insert('1', 0);
        expect(list.get(0)).toBe('1');
        expect(list.size()).toBe(1);
    });

    it('should insert at the beginning of a non-empty list', () => {
        list.append('1');
        list.insert('2', 0);
        expect(list.get(0)).toBe('2');
        expect(list.get(1)).toBe('1');
        expect(list.size()).toBe(2);
    });

    it('should insert at the end of a non-empty list', () => {
        list.append('1');
        list.insert('2', 1);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
        expect(list.size()).toBe(2);
    });

    it('should insert in the middle of a non-empty list', () => {
        list.append('1');
        list.append('3');
        list.insert('2', 1);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
        expect(list.get(2)).toBe('3');
        expect(list.size()).toBe(3);
    });

    it('should not insert at a negative index', () => {
        list.append('1');
        list.insert('2', -1);
        expect(list.size()).toBe(1);
    });

    it('should not insert at an index greater than the length of the list', () => {
        list.append('1');
        list.insert('2', 2);
        expect(list.size()).toBe(1);
    });

    it('should insert in the middle of a non-empty list version 2', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        list.append('4');
        list.append('5');
        list.insert('6', 3);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
        expect(list.get(2)).toBe('3');
        expect(list.get(3)).toBe('6');
        expect(list.get(4)).toBe('4');
        expect(list.get(5)).toBe('5');
        expect(list.size()).toBe(6);
    });

    it('should not insert an invalid data type to the begining of the list', () => {
        list.insert(1, 0);
        list.insert('32', 0);
        list.insert(true, 0);
        list.insert(undefined, 0);
        list.insert(null, 0);
        list.insert({ a: 1 }, 0);
        expect(list.size()).toBe(0);
    });
});

describe('delete())', () => {
    let list;

    beforeEach(() => {
        list = new List();
        list.append('1');
        list.append('2');
        list.append('3');
    });

    test('should remove the item at the specified index', () => {
        const deleted = list.delete(1);
        expect(deleted).toBe('2');
        expect(list.size()).toBe(2);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('3');
    });

    test('should remove the first item', () => {
        const deleted = list.delete(0);
        expect(deleted).toBe('1');
        expect(list.size()).toBe(2);
        expect(list.get(0)).toBe('2');
        expect(list.get(1)).toBe('3');
    });

    test('should remove the last item', () => {
        const deleted = list.delete(2);
        expect(deleted).toBe('3');
        expect(list.size()).toBe(2);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
    });

    test('should return error if index is out of range', () => {
        const deleted = list.delete(3);
        expect(list.size()).toBe(3);
        expect(deleted).toBe('Error. Index out of range.');
    });

    test('should return an empty list', () => {
        list.delete(2);
        list.delete(1);
        list.delete(0);
        expect(list.size()).toBe(0);
        expect(list.get(0)).toBeNull();
    });
});

describe('deleteAll', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should remove all nodes with matching data', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        list.append('1');
        list.append('4');
        list.append('1');

        list.deleteAll('1');

        expect(list.size()).toBe(3);
        expect(list.get(0)).toBe('2');
        expect(list.get(1)).toBe('3');
        expect(list.get(2)).toBe('4');
    });

    it('should remove all nodes with matching data, even if it is the only node', () => {
        list.append('1');

        list.deleteAll('1');

        expect(list.size()).toBe(0);
        expect(list.get(0)).toBe(null);
    });

    it('should do nothing if no nodes have matching data', () => {
        list.append('1');
        list.append('2');
        list.append('3');

        list.deleteAll('4');

        expect(list.size()).toBe(3);
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
        expect(list.get(2)).toBe('3');
    });

    it('should do nothing if the list is empty', () => {
        list.deleteAll('a');

        expect(list.size()).toBe(0);
        expect(list.get(0)).toBe(null);
    });
});

describe('get()', () => {
    let list;

    beforeEach(() => {
        list = new List();
        list.append('1');
        list.append('2');
        list.append('3');
    });

    it('should return null if the index is less than zero', () => {
        expect(list.get(-1)).toBeNull();
    });

    it('should return null if the index is greater than or equal to the length of the list', () => {
        expect(list.get(3)).toBeNull();
    });

    it('should return the data at the specified index', () => {
        expect(list.get(0)).toBe('1');
        expect(list.get(1)).toBe('2');
        expect(list.get(2)).toBe('3');
    });
});

describe('clone()', () => {
    it('should return a new list with the same elements', () => {
        const list = new List();
        list.append('1');
        list.append('2');
        list.append('3');
        const clonedList = list.clone();
        expect(clonedList.size()).toEqual(3);
        expect(clonedList.get(0)).toEqual('1');
        expect(clonedList.get(1)).toEqual('2');
        expect(clonedList.get(2)).toEqual('3');
    });

    it('should return an independent list', () => {
        const list = new List();
        list.append('1');
        list.append('2');
        list.append('3');
        const clonedList = list.clone();
        clonedList.delete(1);
        expect(clonedList.size()).toEqual(2);
        expect(list.size()).toEqual(3);
    });

    it('should return an empty list if original is empty', () => {
        const list = new List();
        const clonedList = list.clone();
        expect(clonedList.size()).toEqual(0);
    });
});

describe('reverse()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should return a reversed list', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        list.append('4');
        list.reverse();
        expect(list.get(0)).toEqual('4');
        expect(list.get(1)).toEqual('3');
        expect(list.get(2)).toEqual('2');
        expect(list.get(3)).toEqual('1');
    });

    it('should return the same list if it contains one item', () => {
        list.append('1');
        list.reverse();
        expect(list.get(0)).toEqual('1');
    });

    it('should return the same list if it contains nothing', () => {
        list.reverse();
        expect(list.size()).toEqual(0);
    });
});

describe('findFirst()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should return the index of the first occurrence of a data item', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        list.append('4');
        list.append('5');
        list.append('1');

        expect(list.findFirst('1')).toEqual(0);
        expect(list.findFirst('2')).toEqual(1);
        expect(list.findFirst('3')).toEqual(2);
        expect(list.findFirst('4')).toEqual(3);
        expect(list.findFirst('5')).toEqual(4);
    });

    it('should return -1 if the data item is not found', () => {
        list.append('1');
        list.append('2');
        list.append('3');

        expect(list.findFirst('4')).toEqual(-1);
        expect(list.findFirst('5')).toEqual(-1);
        expect(list.findFirst('6')).toEqual(-1);
    });
});

describe('findLast()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should return the index of the last occurrence of the element', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        list.append('1');
        const index = list.findLast('1');
        expect(index).toBe(3);
    });

    it('should return the index of the last occurrence of the element in a list with only one element', () => {
        list.append('1');
        const index = list.findLast('1');
        expect(index).toBe(0);
    });

    it('should return the index of the last occurrence of the element in a list with multiple occurrences', () => {
        list.append('1');
        list.append('1');
        const index = list.findLast('1');
        expect(index).toBe(1);
    });

    it('should return -1 if the element is not found', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        const index = list.findLast('4');
        expect(index).toBe(-1);
    });

    it('should return -1 for an empty list', () => {
        const index = list.findLast('1');
        expect(index).toBe(-1);
    });
});

describe('clear()', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    it('should remove all elements from the list and reset the length to zero', () => {
        list.append('1');
        list.append('2');
        list.append('3');
        expect(list.size()).toBe(3);
        list.clear();
        expect(list.size()).toBe(0);
        expect(list.get(0)).toBeNull();
    });

    it('should work correctly even if the list is already empty', () => {
        expect(list.size()).toBe(0);
        list.clear();
        expect(list.size()).toBe(0);
    });
});

describe('extend()', () => {
    it('should add all elements from the given list to the end of the current list', () => {
        const list1 = new List();
        list1.append('1');
        list1.append('2');
        list1.append('3');

        const list2 = new List();
        list2.append('4');
        list2.append('5');
        list2.append('6');

        list1.extend(list2);

        expect(list1.size()).toEqual(6);
        expect(list1.get(0)).toEqual('1');
        expect(list1.get(1)).toEqual('2');
        expect(list1.get(2)).toEqual('3');
        expect(list1.get(3)).toEqual('4');
        expect(list1.get(4)).toEqual('5');
        expect(list1.get(5)).toEqual('6');
    });

    it('should do nothing if the given list is empty', () => {
        const list1 = new List();
        list1.append('1');
        list1.append('2');
        list1.append('3');

        const list2 = new List();

        list1.extend(list2);

        expect(list1.size()).toEqual(3);
        expect(list1.get(0)).toEqual('1');
        expect(list1.get(1)).toEqual('2');
        expect(list1.get(2)).toEqual('3');
    });

    it('should not modify the given list', () => {
        const list1 = new List();
        list1.append('1');
        list1.append('2');
        list1.append('3');

        const list2 = new List();
        list2.append('4');
        list2.append('5');
        list2.append('6');

        list1.extend(list2);

        expect(list2.size()).toEqual(3);
        expect(list2.get(0)).toEqual('4');
        expect(list2.get(1)).toEqual('5');
        expect(list2.get(2)).toEqual('6');
    });
});