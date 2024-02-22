const { imcStatuses } = require('./types');

function imcCalc(weight, height) {
  const heightInMt = height / 100;
  const imc = weight / (heightInMt ** 2);

  const { status } = imcStatuses.find(({ min, max }) => imc >= min && imc < max);

  return { imc, status };
}

module.exports = { imcCalc };
