
//Ejercicio 1 Crear y modificar arreglos

let frutas = ['Pera', 'Manzana', 'Banana']
frutas.push('Uva')
frutas.unshift('Mango')
frutas.pop()
frutas.shift()
console.log(frutas)

//Ejercicio 2  Contar elementos

let nombres = ['Facu', 'Benja', 'Alejo']
console.log(nombres.length)
nombres.push('Cristian','Luis')
console.log(nombres.length)

//Ejercicio 3  Recorrer un arreglo con for

let num = [0, 1, 2, 3];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//Ejercicio 4 Sumar elementos de un arreglo

let numeros = [2, 4, 10, 15]
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i]; 
}
console.log("La suma total es:", suma);

//Ejercicio 5 Cargar elementos con prompt()

alert('A continuación se te pedirá que ingreses 5 palabras');
let palabras = [];
for (let i = 0; i < 5; i++) {

  let palabra = prompt("Escribe una palabra:");
  palabras.push(palabra);
}
console.log("Las palabras que escribiste son:", palabras);
