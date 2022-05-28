//ejercicio 1
console.log ("Ejercicio 1");
var correoArchivo = "yo@gmail.com";
var contrasenaArchivo = "123456";
var correo = prompt("Ingrese su correo:");
var contrasena = prompt("Ingrese su contraseña:");
if (correoArchivo == correo && contrasenaArchivo == contrasena) {
    alert("Correo y contraseña correctos");
}else{
    alert("Error en correo o contraseña");
}
console.log('\n')
//ejercicio2
console.log ("Ejercicio 2");
const remera = "rojo";
const edad = "18";
var ingresoremera = prompt("Ingrese el color de la remera:");
var ingresoedad = prompt("Ingrese la edad:");
if (remera == ingresoremera && edad == ingresoedad) {
    alert("Puede ingresar");
}else{
    alert("No puede ingresar");
}
console.log('\n')
//ejercicio3
console.log ("Ejercicio 3");
var nota1 = Number(prompt("Ingrese la primera nota"));
var nota2 =  Number(prompt("Ingrese la segunda nota"));
var cantNotas = 2
promedio = (nota1 + nota2) / cantNotas
if (promedio >= 7 && nota1 >= 7 && nota2 >= 7) {
    console.log(" Promedio: " + promedio + " Materia aprobada")
} else {
    console.log(" Promedio: " + promedio + " Materia no aprobada")
}
console.log('\n')