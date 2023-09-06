alert("Bienvenido a su carrito");
function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(
        prompt("Ingrese la cantidad de productos")
    );
    console.log(`Cantidad de productos: ${cantidadDeProductos}`);

    let costoTotal = 0;
    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat(
            prompt(`Ingrese el precio del producto ${i} :`)
        );
        if (!isNaN(precioProducto) && precioProducto > 0) {
            costoTotal += precioProducto;
            console.log(`El costo del producto ${i} es: ${precioProducto.toFixed(2)}`)
        } else {
            alert("El precio ingresado es invalido. Intentelo nuevamente");
            i--;
        }
    }
    console.log(`El costo total es: $ ${costoTotal.toFixed(2)} `);
}
calcularCostoTotal();
console.log("------------------------------------------------")







