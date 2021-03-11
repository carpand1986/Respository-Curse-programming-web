'use strict'
/*
 Programa que muestre todos los numeros entre 2 numeros ingresados por el usuario
*/
//declaracion e inicializacion de variables
var num1=0
var num2=0
//capturar datos y convertirlos a entero
    //Capturar Numero 1
do{
    num1=parseInt(prompt("Ingresa tu Primer Numero:"))
    //llamar funcion para validar si el dato ingresado es un numero
    Validar_Num(num1)  
}while(isNaN(num1) == true)

//Capturar Numero 2
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
   Calcular(num2,num1)
}
else{
    Calcular(num1,num2)
}
//funcion para validar dato numerico
function Validar_Num(num)
{
    if(isNaN(num1)){
        alert("Por favor Ingresa un Numero Valido")
    }
}
//funcion calcular entre 2 numeros
function Calcular(num_1,num_2)
{
    let i=num_1+1
    let result=""
    document.write("<h1>Del "+num1+" al "+num2+" estan estos numeros:<br></h1>")
    while (i < num2){
        document.write(i+"<br>")
        i = i + 1
    } 
}