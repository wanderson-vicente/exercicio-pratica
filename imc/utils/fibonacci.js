const readline = require('readline-sync');

const total = readline.questionInt('Digite quantidade');
let a = 0;
let b = 1;
let c = 0;

for (let x = 1; x <= total; x += 1) {
  console.log(c = a + b);
  if (c > 2) {
    b = a;
    a = c;
  } else {
    a += 1;
    b = 1;
  }
}
