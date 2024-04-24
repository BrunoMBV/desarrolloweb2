/*descripcion :Ejemplo carrito de supermercado y imprimir en consola
desarrolador :miguel bruno barba 
fecha:16-04-2024
Cambios: ninguno*/
//compras a un supermercado
/*let carrito=[ "leche",1,
                "carne",2,
                "papa",3,
                "fideos",4,]
console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Irem:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);


// Agregar un nuevo elemento ("pan") con su cantidad (2) al final del carrito
carrito.push("pan", 2);
console.log("Nuevo elemento añadido al carrito:", carrito);*/

/*let item = {nombre: "leche", cantidad: 1}; // Corregir el nombre de la propiedad "nombre" colocándola entre comillas
console.log("item: " + item.nombre);
console.log("cantidad: " + item.cantidad);

let carrito = [
    {nombre: "leche", cantidad: 1},
    {nombre: "Carne", cantidad: 2}, 
    {nombre: "fideo", cantidad: 1}, 
    {nombre: "papa", cantidad: 3}  
    // Comentar la adición de un nuevo registro
    // {nombre: "manzana", cantidad: 5} // Ejemplo de nuevo registro
];

// Imprimir el carrito con etiquetas
console.log("Carrito de compras:");
carrito.forEach(item => {
    console.log("Nombre del producto: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("--------------------");
});

// Adición de un nuevo registro al carrito
carrito.push({nombre: "manzana", cantidad: 5});

// Imprimir el carrito actualizado
console.log("Carrito de compras actualizado:");
carrito.forEach(item => {
    console.log("Nombre del producto: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("--------------------");
});*/


/*let item = {nombre: "leche", cantidad: 1}; 
console.log("item: " + item.nombre);
console.log("cantidad: " + item.cantidad);

let carrito = [
    {nombre: "leche", cantidad: 1},
    {nombre: "Carne", cantidad: 2}, 
    {nombre: "fideo", cantidad: 1},
    {nombre: "papa", cantidad: 3}   
    // {nombre: "manzana", cantidad: 5} // Ejemplo de nuevo registro
];

// Imprimir el carrito con etiquetas usando un bucle for
console.log("Carrito de compras:");
for (let i = 0; i < carrito.length; i++) {
    console.log("Nombre del producto: " + carrito[i].nombre);
    console.log("Cantidad: " + carrito[i].cantidad);
    console.log("--------------------");
}

// Adición de un nuevo registro al carrito
carrito.push({nombre: "manzana", cantidad: 5});

// Imprimir el carrito actualizado
console.log("Carrito de compras actualizado:");
for (let i = 0; i < carrito.length; i++) {
    console.log("Nombre del producto: " + carrito[i].nombre);
    console.log("Cantidad: " + carrito[i].cantidad);
    console.log("--------------------");
}*/


let carrito = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito.push(item);

let carrito2 = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito2.push(item);
//Buscar funciones o procesos para ordenar un array
//Ordenar el array de carrito
//Ordenar un array lineal
/*let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
*/
console.log("IMPRESION ORDENADA POR PRECIO");
carrito2.sort((x,y)=>x.precio - y.precio);
console.log(carrito2);

console.log("IMPRESION ORDENADA POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);