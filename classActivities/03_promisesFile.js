const fs = require ('fs');

fs.promises.readFile('./text.txt', 'utf-8')
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log('Error al leer el archivo.');
})


const writeFile = async () => {
  try {
    let write = await fs.promises.writeFile('./text.json', 'Data nueva en el archivo JSON.', 'utf-8');
    console.log('Archivo creado exitosamente.');
  } catch (error) {
    console.log('Error al escribir el archivo.');
  }
}
writeFile();

