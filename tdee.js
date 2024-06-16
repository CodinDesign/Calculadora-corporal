document.getElementById('tdeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    let bmr;

    // Calcular BMR baseado no gênero
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calcular TDEE multiplicando BMR pelo nível de atividade
    const tdee = bmr * activity;

    // Mostrar o resultado
    document.getElementById('result').textContent = `Seu TDEE é: ${tdee.toFixed(2)} calorias por dia.`;
});