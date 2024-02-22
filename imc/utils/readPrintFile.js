const fs = require('fs').promises;
const path = require('path');

const PATH_DATA = '../data/';

const myFile = path.resolve(__dirname, '../data/simpsons.json');
async function readAll() {
  try {
    const data = await fs.readFile(myFile, 'utf-8');
    const simpsons = JSON.parse(data);
    // console.log(simpsons);
    return simpsons;
  } catch (err) {
    console.error(`Erro ao ler o arquivo; ${err}`);
    return null;
  }
}

async function writeFile(name, array) {
  const pathAndFile = `${PATH_DATA}${name}`;
  try {
    await fs.writeFile(pathAndFile, JSON.stringify(array));
  } catch (err) {
    console.error(`Erro de gravação: ${err}`);
  }
}

async function printAll(myArray) {
  try {
    myArray.map(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (err) {
  console.error(`Erro: Função tem que receber um array ${err}`);
  }
}
async function main() {
  const myArray = await readAll();
  // console.log(myArray);
  // writeFile('teste.json', myArray);
  printAll(myArray);
}

main();
// async function printAll(list) {
//   const reportAll = await list.map(({ id, name }) => `${id} - ${name}`);
//   console.log(reportAll);
// }
// printAll(readAll());
// // readAll();
// module.exports = { readAll };
// const list = simpsons.map(({ id, name }) => `${id} - ${name}`); 
// list.forEach((item) => console.log(item));