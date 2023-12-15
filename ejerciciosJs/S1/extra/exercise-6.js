const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

// Recorrer el array de productos
for (var i = 0; i < products.length; i++) {
    // Verificar la cantidad de ventas y agregar al array correspondiente
    if (products[i].sellCount > 20) {
      goodProducts.push(products[i]);
    } else {
      badProducts.push(products[i]);
    }
  }
  
  // Imprimir los arrays resultantes en la consola
  console.log("Productos con más de 20 ventas:", goodProducts);
  console.log("Productos con 20 o menos ventas:", badProducts);