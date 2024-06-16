document.getElementById('waterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const waterAmountMin = weight * 30; // Mínimo de 30 ml/kg de peso corporal
    const waterAmountMax = weight * 35; // Máximo de 35 ml/kg de peso corporal

    document.getElementById('result').innerHTML = `A quantidade de água recomendada varia entre ${waterAmountMin.toFixed(1)} ml e ${waterAmountMax.toFixed(1)} ml por dia.`;
});