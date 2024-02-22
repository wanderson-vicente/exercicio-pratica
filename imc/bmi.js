const { imcCalc } = require('./utils/imcCalc');

const weightInKg = 90;
const heightInCm = 175;
function main() {
  const imc = imcCalc(weightInKg, heightInCm);
  console.log(imc);
}

main();