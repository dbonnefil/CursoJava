// ejercicio 3a
console.log("Ejercicio 3a");
var base = 15;
var altura = 10;
const pi = 3.1428;
var radio = 18;
var superficieTriangulo = (base * altura) / 2;
var superficieRectangulo = base * altura;
var superficieCirculo = (radio * radio) * pi;
console.log ("Base " + base + "  Altura " + altura + "  Superficie Triángulo " + superficieTriangulo);
console.log ("Base " + base + "  Altura " + altura + "  Superficie Rectángulo " + superficieRectangulo);
console.log ("Radio " + radio + "  Superficie Círculo " + superficieCirculo);
console.log('\n');
// ejercicio 3b
console.log("Ejercicio 3b");
var num1 = 5;
var num2 = 8;
var num3 = 12;
var producto = num1 * num2 * num3;
var suma = num1 + num2 + num3;
var promedio = (suma) / 3;
console.log ("num1 " + num1 + "  num2 " + num2 + "  num3 " + num3);
console.log ("Producto " + producto);
console.log ("Suma     " + suma);
console.log ("Promedio " + promedio);
console.log('\n');
// ejercicio 3c
console.log("Ejercicio 3c");
var producto = "Libro    ";
var precio = 3000;
console.log(producto + "  " + precio);
var total = precio;
producto = "Cuaderno ";
precio = 1000;
console.log(producto + "  " + precio);
total = total + precio;
producto = "Borrador ";
precio = 250;
console.log(producto + "  " + precio);
total = total + precio;
producto = "Boligrafo";
precio = 400;
console.log(producto + "  " + precio);
total = total + precio;
producto = "Lápiz    ";
precio = 100;
console.log(producto + "  " + precio);
total = total + precio;
console.log("           -----");
console.log("Subtotal   " + total);
var descuento = (total * 15) / 100;
console.log("Descuento  " + descuento);
total = total - descuento;
console.log("Total      " + total)
console.log('\n');
// ejercicio 3d
console.log("Ejercicio 3d");
var pesos = 150000;
var dolar = Number(prompt("Favor ingresar el valor del dolar: "));
var cambio = pesos / dolar;
console.log("Pesos: " + pesos + "  Valor dolar: " + dolar + " Cambio pesos: " + cambio)
console.log('\n');
// ejercicio 3e
console.log("Ejercicio 3e");
var montoFactura = Number(prompt("Favor ingresar el valor de la factura: "));
var montoIva = (montoFactura * 21) / 100;
console.log("El monto del IVA es: "+ montoIva);
