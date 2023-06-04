const List = require('./main.js');

const example1 = new List();
const example2 = new List();

example1.append('a');
example1.append('b');
example1.append('c');
example2.append('d');
example2.append('e');
example2.append('f');

console.log(`Size of example1: ${example1.size()}`);
console.log(`Size of example2: ${example2.size()}`);

example1.insert('a', 3);
console.log(`Value of the inserted item in example1: ${example1.get(3)}`);
console.log(`Size of example1 after insert: ${example1.size()}`);

example2.delete(0);
console.log(`Size of example2 after delete: ${example2.size()}`);
console.log(`First item after deleting first item "d": ${example2.get(0)}`);

example1.deleteAll('a');
console.log(`Size of example1 after deleteAll('a'): ${example1.size()}`);

const cloned = example1.clone();
console.log(`Items of cloned list from example1 with length ${cloned.size()}: ${cloned.get(0)}, ${cloned.get(1)}`);

cloned.reverse();
console.log(`Reversed cloned list with length ${cloned.size()}: ${cloned.get(0)}, ${cloned.get(1)}`);

const example3 = new List();
example3.append('a');
example3.append('a');
example3.append('a');

console.log(`This list is fully filled with 'a'. The first found 'a' has index ${example3.findFirst('a')} and the last found 'a' has index ${example3.findLast('a')}`);

example3.clear();
console.log(`An example3 after clear with length ${example3.size()}`);

console.log(`Example1 with length ${example1.size()} has items: ${example1.get(0)}, ${example1.get(1)}`);

console.log(`Example2 with length ${example2.size()} has items: ${example2.get(0)}, ${example2.get(1)}`);

example1.extend(example2);

console.log(`An extended list with length ${example1.size()} has items: ${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}, ${example1.get(3)}`);