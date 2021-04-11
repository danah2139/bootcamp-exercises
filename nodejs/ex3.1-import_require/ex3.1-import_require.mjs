import fs from 'fs' ;
import add from './add.js';
console.log(fs);
//const add = require('./add.js');
console.log(add(7,8));

console.log(process.env);



// Require is Non-lexical, it stays where they have put the file.	Import is lexical, it gets sorted to the top of the file.
// It can be called at any time and place in the program.	It can’t be called conditionally, it always run in the beginning of the file.
// You can directly run the code with require statement.	To run a program containing import statement you have to use experimental module feature flag.
// If you want to use require module then you have to save file with ‘.js’ extension.	If you want to use import module then you have to save file with ‘.mjs’ extension.