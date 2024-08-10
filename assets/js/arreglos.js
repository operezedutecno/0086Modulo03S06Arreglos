var numeros = [8,5,10,20,25,86]
numeros[2] = 12
numeros.length = 3
numeros.push("Luis");
numeros.push([8,5,2])
numeros.push({ nombre: "María", edad: 30, activo: true})
// Añadir propiedad a un objeto que está dentro de un array
numeros[5].apellido = "Gómez"
// console.log(numeros);
// console.log(numeros[4][2]);

// console.log("Tercera casilla", numeros[2]);

// Acceder a objeto con notación de punto
// console.log("Nombre", numeros[5].nombre);

// Acceder a objeto con notación de corchete
// console.log("Nombre", numeros[5]["nombre"]);



var numeros = [8,5,10,20,25,86]
// Función que agrega un elemento al final del arreglo...
numeros.push(15)

// Mostrar arreglo con valores iniciales
// console.log({...numeros});

// Función para eliminar el último elemento de un array (POP)
// var ultimoEliminado = numeros.pop();
// console.log("Último eliminado", ultimoEliminado);
// var ultimoEliminado = numeros.pop();
// console.log("Último eliminado", ultimoEliminado);

// Función para eliminar el primer elemento de un array (shift)
// numeros.shift()

// Función para agregar elementos al inicio de un arreglo
numeros.unshift(100)
numeros.unshift(300,200)


console.log(numeros);

// var filtrados = numeros.filter(elemento => {
//     return elemento >= 50 && elemento <= 100
// })

var filtrados = numeros.filter(function(elemento) {
    return elemento >= 50 && elemento <= 100
})
// console.log(filtrados);

// Función para saber si un valor existe en el arreglo (INCLUDES)
console.log("Buscando el 8", numeros.includes(8));
console.log("Buscando el 10", numeros.includes(10));

console.log("Buscando el 2", numeros.includes(2));
console.log("Buscando el 9", numeros.includes(9));