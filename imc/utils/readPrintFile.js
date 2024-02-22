const fs = require('fs').promises;
const path = require('path');

const PATH_DATA = path.resolve(__dirname, '../data/');
// const myFile = path.resolve(__dirname, '../data/simpsons.json');
// async function readAll() {
//   try {
//     const data = await fs.readFile(myFile, 'utf-8');
//     const simpsons = JSON.parse(data);
//     // console.log(simpsons);
//     return simpsons;
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo; ${err}`);
//     return null;
//   }
// }

async function readFile(file) {
  try {
    const data = await fs.readFile(`${PATH_DATA}/${file}`, 'utf-8');
    const persons = JSON.parse(data);
    return persons;
  } catch (err) {
    console.error(`Erro ao ler o arquivo; ${err}`);
    return null;
  }
}

async function writeFile(name, array) {
  const pathAndFile = `${PATH_DATA}/${name}`;
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
  const listing = await (readFile('simpsons.json'));
  const personId = listing.find((person) => Number(person.id) === id);
  console.log(personId);
}

async function updateFile(myArray, file) {
  const listing = await readFile('simpsons.json');
  const newArray = listing.filter((person) => !myArray.includes(Number(person.id)));
  writeFile(file, newArray);
} 

async function readAndWriteNewFileById(myArray, file) {
  const listing = await readFile('simpsons.json');
  const newArray = listing.filter((person) => myArray.includes(Number(person.id)));
  writeFile(file, newArray);
}

async function addPersonFile(myobject) {
  const listing = await readFile('simpsonFamily.json');
  listing.push(myobject);
  writeFile('simpsonFamily.json', listing);
}

async function main() {
  // const myArray = await readFile('simpsons.json');
  // console.log(myArray);
  // writeFile('teste.json', myArray);
  // printAll(myArray);
  // findPersonId(3);
  // updateFile([10, 6], 'simpsons.json');
  // readAndWriteNewFileById([1, 2, 3, 4], 'simpsonFamily.json');
  // readFile('simpsonFamily.json');
  addPersonFile({ id: '15', name: 'Nelson Muntz' });
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