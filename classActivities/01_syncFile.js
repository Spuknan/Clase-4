const fs = require('fs');

// try {
//    let readFile = fs.readFileSync('./text.txt', {encoding: 'utf-8'});
//    console.log(readFile);
// } catch (error) {
//    console.error("Error al leer un archivo");
// } 

let user = [
  {
    name: 'Hernán',
    surname: 'Rojas'
  },
  {
    name: 'Juan',
    surname: 'Perez'
  },
  {
    name: 'Pedro',
    surname: 'Lopez'
  },
  {
    name: 'Martin',
    surname: 'Ramirez'
  }
]



//try {
//  fs.writeFileSync('./text.json', JSON.stringify(user, null, 2), { encoding: 'utf-8' });
//} catch (error) {
//  console.error(error)
//}

try {
  fs.writeFileSync('./text.txt', 'Contenido inicial', { encoding: 'utf-8' });
  fs.appendFileSync('./text.txt', '\nContenido secundario', { encoding: 'utf-8'});
  fs.appendFileSync('./text.txt', '\nContenido terciario', { encoding: 'utf-8'});
  console.log('Info agregada');
} catch (error) {
  console.error(error)
}
