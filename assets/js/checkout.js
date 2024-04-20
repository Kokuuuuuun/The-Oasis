document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var metodoPago = document.getElementById('metodo').value;
        var country = document.getElementById('country').value;
        var province = document.getElementById('province').value;

        // Validar que todos los campos  estén llenos
        y

        // Si todos los campos requeridos están llenos, enviar el formulario
        form.submit();
    });
});
// Obtener los parámetros 
const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
const precio = parseFloat(urlParams.get('precio')); 
// Llenar el formulario con la información del producto seleccionado
document.getElementById('nombreProducto').value = nombre;
document.getElementById('precioProducto').value = `$${precio}`;

// Obtener el elemento de cantidad
const cantidadInput = document.getElementById('cantidad');

// Calcular el precio total inicialmente al cargar la página
calcularPrecioTotal();

// Función para calcular el precio total basado en la cantidad ingresada
function calcularPrecioTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const precioTotal = cantidad * precio;
    document.getElementById('precioTotal').textContent = `Precio Total: $${precioTotal}`;
}

cantidadInput.addEventListener('change', calcularPrecioTotal);


