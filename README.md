# SDM-lab2
## List Class

This is a JavaScript implementation of a List data structure, which supports common operations such as adding, inserting, deleting, getting, cloning, reversing, finding, clearing, and extending elements.

### Variant

My number in group list 6 (I couldn't find my gradebook), and the remainder of division by 4 is 2 - my variant.

At first I had to code a list based on built-in arrays/lists and then change it to list based on built-in arrays/lists one-way linked ring list.

### Build and test
To build and run tests, follow these steps:

Clone the repository to your local machine:
```bash
git clone https://github.com/Dolaran/SDM-lab2.git
```
Navigate to the project directory:
```bash
cd SDM-lab2
```
Install dependencies:
```bash
npm install
```
How to launch the programm:
```bash
node main.js
```
How to run the tests:
```bash
npm test
```

[Link1](https://github.com/Dolaran/SDM-lab2/actions/runs/5168855059) ,[Link2](https://github.com/Dolaran/SDM-lab2/actions/runs/5168818801) to the commits where the tests failed on CI.

### Conclusion
Unit tests are an essential part of software development, as they help ensure that the code is working correctly and can catch bugs before they make it into production. In this project, the tests were helpful in ensuring that the List class works as expected after refactoring (for example, I forgot about export and all tests failed, that is signal that problem is global, it helped to find error faster) and that all the operations are implemented correctly. Therefore, unit tests are not a waste of time and should be an integral part of the development process as respect and help for future developers. 