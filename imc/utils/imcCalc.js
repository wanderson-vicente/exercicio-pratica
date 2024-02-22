function imcCalc(weight, height) {
  const heightInMt = (height / 100);
  const imc = weight / (heightInMt ** 2);
  let status = '';
  if (imc < 18.5) {
      status = 'Abaixo do peso (magreza)';
    } else if (imc >= 18.5 && imc < 24.9) {
      status = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      status = 'Acima do peso (sobrepeso)';
    } else if (imc >= 30 && imc < 34.9) {
      status = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
      status = 'Peso normal';
    } else {
      status = 'Obesidade graus III e IV';
    }
  return { imc, status };
}

module.exports = { imcCalc };
