const fs = require("fs");

class ProductManager {
   static productSchema = {
      id: Number,
      title: String,
      description: String,
      price: Number,
      thumbnail: String,
      code: String,
      stock: Number
   };

   constructor(path) {
      this.path = path;
   }

   addProduct(product) {
      // Leer el archivo de productos
      const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

      // Asignar el id autoincrementable
      const lastId = products.length > 0 ? products[products.length - 1].id : 0;
      const newProduct = { id: lastId + 1, ...product };

      // Agregar el producto al arreglo
      products.push(newProduct);

      // Guardar el arreglo de productos en el archivo
      fs.writeFileSync(this.path, JSON.stringify(products));

      // Devolver el nuevo producto
      return newProduct;
   }

   getProducts() {
      // Leer el archivo de productos
      const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

      // Devolver el arreglo de productos
      return products;
   }

   getProductById(id) {
      // Leer el archivo de productos
      const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

      // Buscar el producto con el id especificado
      const product = products.find(p => p.id === id);

      // Devolver el producto encontrado o null si no se encontró
      return product || null;
   }

   updateProduct(id, update) {
      // Leer el archivo de productos
      const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

      // Encontrar el índice del producto con el id especificado
      const index = products.findIndex(p => p.id === id);

      // Si no se encontró el producto, devolver null
      if (index === -1) {
         return null;
      }

      // Actualizar el producto en el arreglo
      products[index] = { ...products[index], ...update };

      // Guardar el arreglo de productos en el archivo
      fs.writeFileSync(this.path, JSON.stringify(products));

      // Devolver el producto actualizado
      return products[index];
   }

   deleteProduct(id) {
      // Leer el archivo de productos
      const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

      // Filtrar los productos que no tienen el id especificado
      const filteredProducts = products.filter(p => p.id !== id);

      // Si el número de productos filtrados es el mismo que el número de productos originales, significa que no se eliminó ningún producto
      if (filteredProducts.length === products.length) {
         return null;
      }

      // Guardar el arreglo de productos filtrados en el archivo
      fs.writeFileSync(this.path, JSON.stringify(filteredProducts));

      // Devolver el producto eliminado
      return id;
   }
}







//! TESTING
const productManager = new ProductManager("./products.json");

// verificar que getProducts() devuelve un arreglo vacío [] al iniciar el archivo JSON vacío
const products = productManager.getProducts();
if (products.length !== 0) {
   console.error("ERROR: getProducts no devuelve un arreglo vacío al iniciar el archivo JSON vacío");
} else {
   console.log("Test exitoso: getProducts devuelve un arreglo vacío al iniciar el archivo JSON vacío");
}