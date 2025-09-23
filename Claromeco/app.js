

function calcularCosto() {
    const consumo = parseFloat(document.getElementById("consumo").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const resultado = parseFloat(document.getElementById("resultado").value);


if (isNaN(consumo) || isNaN(distancia) || isNaN(precio)){
 
    resultado.textContent =
    "Por favor, completá todos los campos correctamente.";
    return;

}
const litrosTotales = (consumo * distancia) / 100;
const costoTotal = litrosTotales * precio;
console.log(costoTotal);
alert(`El costo total es : $${costoTotal.toFixed(2)}`);
 

 resultado.textContent =`El costo total del combustible: $${costoTotal.toFixed(2)}`;

}
