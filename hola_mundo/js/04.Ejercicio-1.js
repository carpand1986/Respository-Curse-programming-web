'use strict'
/*
 Programa que solicitara 2 numeros y dira cual es el mayo, cual es menor o si son iguales
*/
//declaracion e inicializacion de variables
var num1=0
var num2=0
//capturar datos y convertirlos a entero
    //Capturar Num1
do{
    num1=parseInt(prompt("Ingresa tu Primer Numero:"))
    //llamar funcion para validar si el dato ingresado es un numero
    Validar_Num(num1)  
}while(isNaN(num1) == true)

//Capturar Num2
do{
    num2=parseInt(prompt("Ingresa tu Segundo Numero:"))
     //llamar funcion para validar si el dato ingresado es un numero
    Validar_Num(num2)
   
}while(isNaN(num2) == true)

//comparar numeros
if(num1 == num2){
    alert("Los numeros Ingresados son Iguales")
}
else if(num1 > num2){
    alert("El Primer Numero Ingresado: "+num1+" es Mayor al Segundo: "+num2)
}
else{
    alert("El Segundo Numero Ingresado: "+num2+" es Mayor al Primero: "+num1)
}
//funcion para validar dato numerico
function Validar_Num(num)
{
    if(isNaN(num1)){
        alert("Por favor Ingresa un Numero Valido")
    }
}