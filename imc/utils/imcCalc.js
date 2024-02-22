function imcCalc(weight, height) {
  const heightInMt = (height / 100);
  const imc = weight / (heightInMt ** 2);
  return imc;
}

module.exports = { imcCalc };
