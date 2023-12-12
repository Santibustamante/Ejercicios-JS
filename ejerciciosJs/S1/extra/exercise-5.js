const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

var totalVentas = 0;
var cantidadProductos = products.length;

// Recorrer el array de productos y sumar las ventas
for (var i = 0; i < cantidadProductos; i++) {
  totalVentas += products[i].sellCount;
}

// Calcular la media de ventas
var mediaVentas = totalVentas / cantidadProductos;

// Imprimir el total de ventas y la media en la consola
console.log("El total de ventas es:", totalVentas);
console.log("La media de ventas es:", mediaVentas);