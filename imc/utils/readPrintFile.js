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
    const listing = myArray.map(({ id, name }) => (`${id} - ${name}`));
    console.log('Id - Nome do personagem');
    listing.forEach((person) => console.log(person));
  } catch (err) {
  console.error(`Erro: Função tem que receber um array ${err}`);
  }
}

async function findPersonId(id) {
  const listing = await (readAll());
  const personId = listing.find((person) => Number(person.id) === id);
  console.log(personId);
}

async function updateFile(myArray, file) {
  const listing = await readAll();
  const newArray = listing.filter((person) => !myArray.includes(Number(person.id)));
  writeFile(file, newArray);
} 

async function readAndWriteNewFileById(myArray, file) {
  const listing = await readAll();
  const newArray = listing.filter((person) => myArray.includes(Number(person.id)));
  writeFile(file, newArray);
}

async function main() {
  const myArray = await readAll();
  // console.log(myArray);
  // writeFile('teste.json', myArray);
  // printAll(myArray);
  // findPersonId(3);
  // updateFile([10, 6], 'simpsons.json');
  readAndWriteNewFileById([1, 2, 3, 4], 'simpsonFamily.json');
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