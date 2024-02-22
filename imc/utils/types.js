const imcStatuses = [
  { min: 0, max: 18.5, status: 'Abaixo do peso (magreza)' },
  { min: 18.5, max: 24.9, status: 'Peso normal' },
  { min: 25, max: 29.9, status: 'Acima do peso (sobrepeso)' },
  { min: 30, max: 34.9, status: 'Obesidade grau I' },
  { min: 35, max: 39.9, status: 'Obesidade grau II' },
  { min: 40, max: Infinity, status: 'Obesidade graus III e IV' },
];

module.exports = { imcStatuses };
