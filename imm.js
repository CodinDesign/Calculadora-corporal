document.getElementById('immForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const percentualGordura = parseFloat(document.getElementById('percentualGordura').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && percentualGordura >= 0 && percentualGordura <= 100 && altura > 0) {
        // Calcular a massa gorda
        const massaGorda = peso * (percentualGordura / 100);
        // Calcular a massa magra
        const massaMagra = peso - massaGorda;

        // Calcular o IMM
        const imm = massaMagra / (altura * altura);

        const resultado = `Seu IMM é ${imm.toFixed(2)}.`;
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
    }
});