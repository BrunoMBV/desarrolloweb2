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

let item={nombre:"leche",cantidad:1,precio:7.5};

let carrito = [
    {nombre: "leche", cantidad: 1,precio:7.5},
    {nombre: "Carne", cantidad: 2,precio:14.5}, 
    {nombre: "fideo", cantidad: 1,precio:6},
    {nombre: "papa", cantidad: 3,precio:7}]   
//imprimir item, cantidad ,precio total 
console.log("item"+item.nombre);
// Imprimir el nombre del artículo
console.log("Nombre del artículo:", item.nombre);

// Imprimir la cantidad del artículo
console.log("Cantidad:", item.cantidad);

//imprimir precio totsl del articulo de acuerdo a la cantidad

console.log("Carrito de compras actualizado:");
for (let i = 0; i < carrito.length; i++) {
    console.log("Nombre del producto: " + carrito[i].nombre);
    console.log("Cantidad: " + carrito[i].cantidad);
    console.log("Precio :" + carrito[i].precio*carrito[i].cantidad);
    console.log("--------------------");
}

// Adición de un nuevo registro al carrito
carrito.push({nombre: "manzana", cantidad: 5,precio:6});



/// Calcular y imprimir el precio total del carrito
let precioTotalCarrito = 0;
for (let i = 0; i < carrito.length; i++) {
    precioTotalCarrito += carrito[i].cantidad * carrito[i].precio;
}
console.log("Precio total del carrito:", precioTotalCarrito.toFixed(2));

//buscar funciones o procesos para ordenar un array
/// Ordenar el carrito por nombre del producto
carrito.sort((a, b) => {//llamada al medoto (shot)array del carrito
    if (a.nombre < b.nombre) {//si a es menor que b entonces a vair primero que a
        return -1;
    }
    if (a.nombre > b.nombre) {//si b es menor que a entonces a vair primero que b
        return 1;
    }
    return 0;// cuando a y b  sean iguales a 0 se mantendra el orden 
});

// Imprimir el carrito ordenado por nombre del producto
console.log("Carrito de compras ordenado por nombre:");
for (let i = 0; i < carrito.length; i++) {
    console.log("Nombre del producto: " + carrito[i].nombre + ", Cantidad: " + carrito[i].cantidad + ", Precio total: " + (carrito[i].cantidad * carrito[i].precio).toFixed(2));
}

