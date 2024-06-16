document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let estadoNutricional = '';

        if (imc < 18.5) {
            estadoNutricional = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            estadoNutricional = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            estadoNutricional = 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            estadoNutricional = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 39.9) {
            estadoNutricional = 'Obesidade grau II';
        } else if (imc >= 40) {
            estadoNutricional = 'Obesidade grau III';
        }

        const resultado = `Seu IMC é ${imc.toFixed(2)} (${estadoNutricional}).`;
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
    }
});