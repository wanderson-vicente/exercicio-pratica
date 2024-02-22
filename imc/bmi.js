const readline = require('readline-sync');
const { imcCalc } = require('./utils/imcCalc');

// const weightInKg = 90;
// const heightInCm = 175;
function main() {
  const weightInKg = readline.question('Digite seu peso em quilos: ');
  const heightInCm = readline.questionInt('Digite sua altura em centimetros: ');
  const imc = imcCalc(weightInKg, heightInCm);
  console.log('Seu IMC é de: ' + imc.toFixed(2));
}

main();