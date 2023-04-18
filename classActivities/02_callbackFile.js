const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('Error al leer el archivo');
  } else {
    console.log(data)
  }
})

fs.writeFile('./text.json', 'Contenido nuevo callbackFile', 'utf-8', (err) => {
  if (err) {
    console.log('Error al escribir o crear el archivo.');
  } else {
    console.log('Archivo escrito o creado exitosamente.');
  }
});

fs.unlink('./text.txt', (err) => {
  if (err) {
    console.log('Error al borrar el archivo.');
  } else {
    console.log('Archivo borrado exitosamente.');
  }
})