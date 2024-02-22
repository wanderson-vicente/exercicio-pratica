const fs = require('fs').promises;
const path = require('path');

const PATH_DATA = path.resolve(__dirname, '../data/');

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
  return personId;
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

async function updataFile(idDelete, myobject) {
  const listing = await readFile('simpsonFamily.json');
  const listingIdDelete = listing.filter((person) => Number(person.id) != idDelete);
  listingIdDelete.push(myobject);
  console.log(listingIdDelete);
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
  // addPersonFile({ id: '15', name: 'Nelson Muntz' });
  // updataFile(15, { id: '5', name: 'Maggie Simpson' });
}

main();
