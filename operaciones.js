function calcular(operacion) {
  const v1 = parseFloat(document.getElementById('valor1').value);
  const v2 = parseFloat(document.getElementById('valor2').value);
  let resultado;

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById('resultado').textContent = 'Por favor ingrese números válidos';
    return;
  }

  switch (operacion) {
    case 'suma': resultado = v1 + v2; break;
    case 'resta': resultado = v1 - v2; break;
    case 'multiplicacion': resultado = v1 * v2; break;
    case 'division': 
      resultado = v2 !== 0 ? v1 / v2 : 'Error: división por cero'; 
      break;
    case 'potencia': resultado = Math.pow(v1, v2); break;
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
