//ejercicio 1
console.log ("Ejercicio 1")
var numero1 = 8;
var numero2 = 6;
var menor;
if (numero1 <= numero2) {
    menor = numero1
} else {
    menor = numero2
}
console.log ("El menor de los números " + numero1 + ", " + numero2 + " es " + menor);
console.log ('\n');
//ejercicio 2
console.log ("Ejercicio 2");
var numero = prompt("Por favor ingrese un número");
numero = parseInt(numero);
var resto = numero % 2;
if (resto == 0) {
    console.log ("El número " + numero + " es par");
}else{
    console.log ("El número " + numero + " es impar");
}
console.log ('\n');
//ejercicio 3
console.log("Ejercicio 3");
var ganeLaCarrera = false;
if (ganeLaCarrera == 1) {
    console.log ("Ganaste");
}else{
    console.log ("Perdiste");
}
console.log('\n');
//ejercicio 4
console.log("Ejercicio 4");
var posicionEnLaCarrera = 6;
if (posicionEnLaCarrera == 1) {
    console.log ("FELICITACIONES, SALISTE 1RO");
}else{
    if (posicionEnLaCarrera == 2) {
        console.log ("Te falto poquito para ganar");
    }else{
        if (posicionEnLaCarrera == 3) {
            console.log ("Sos un orgullo para tu familia");
        }else{
            if (posicionEnLaCarrera == 4) {
                console.log ("Volvé a tu casa");
            }else{
                console.log ("No tires fruta");
            }
        }
    }    
}
console.log('\n');
//ejercicio 6
console.log("Ejercicio 6");
var importe = prompt("Por favor ingrese el monto de la factura");
importe = Number(importe);
if (importe >= 1000) {
    importe = (importe - (importe * 0.2));
}
console.log ("El importe total a abonar es " + importe)
console.log('\n');
//ejercicio 7
console.log("Ejercicio 7");
var vendido = 1000;
var vendedor = 200;
var comision = 0
if (vendedor < 100) {
    comision = vendido * 0.3;
}else{
    if (vendedor >= 100 && vendedor <= 200) {
        comision = vendido * 0.2;
    }else{
        comision = vendido * 0.1;
    }
}
console.log ("Código vendedor: " + vendedor + " Monto vendido: " + vendido + " Comisión: " + comision);
console.log ('\n');
//ejercicio 8
console.log("Ejercicio 8");
var d = prompt("Por favor ingrese el día de la semana");
if (d == 1) {
    console.log ("Lunes");
}else{
    if (d == 2) {
        console.log ("Martes");
    }else{
        if (d == 3) {
            console.log ("Miércoles");
        }else{
            if (d == 4) {
                console.log ("Jueves");
            }else{
                if (d == 5) {
                    console.log ("Viernes");
                }else{
                    if (d == 6) {
                        console.log ("Sábado");
                    }else{
                        console.log ("Domingo");
                    }
                }    
            }    
        }
    }
}
console.log('\n');
//ejercicio 9
console.log ("Ejercicio 9");
var numeroPersonas = Number(prompt("Por favor ingrese el numero de personas"));
var totalPago
if (numeroPersonas < 8) {
    totalPago = numeroPersonas * 1.5;
}else{
    totalPago = numeroPersonas * 0.5;
}
console.log ("El monto a pagar por " + numeroPersonas + " personas es " + totalPago);
console.log ('\n');
//ejercicio 10
console.log ("Ejercicio 10");
var montoCompra = 120;
var mtoDct;
if (montoCompra > 100) {
    mtoDct = montoCompra - (montoCompra * 0.15);
}
console.log("El monto a abonar sobre una compra de " + montoCompra + " es " + mtoDct)