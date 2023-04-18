const fs = require('fs');


const date = new Date().toLocaleDateString();

fs.writeFile('./date.txt', `La fecha es: ${date}.`, (err) => {
  if (err) {
    console.log('Error al escribir o crear el archivo.');
  } else {
    console.log('Archivo escrito o creado exitosamente.');
  }
});


fs.readFile('./date.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error al leer archivo');
  } else {
    console.log(data);
  }
})