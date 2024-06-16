function calcularNDC() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseFloat(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) * 100; // Convertendo de metros para cm
    const atividade = document.getElementById('atividade').value;
    let ndc;

    switch (sexo) {
        case 'masculino':
            ndc = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
            break;
        case 'feminino':
            ndc = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
            break;
        default:
            alert('Selecione um sexo válido.');
            return;
    }

    switch (atividade) {
        case 'sedentario':
            ndc *= 1.2;
            break;
        case 'levemente_ativo':
            ndc *= 1.375;
            break;
        case 'moderadamente_ativo':
            ndc *= 1.55;
            break;
        case 'altamente_ativo':
            ndc *= 1.725;
            break;
        case 'extremamente_ativo':
            ndc *= 1.9;
            break;
        default:
            alert('Selecione um nível de atividade válido.');
            return;
    }

    document.getElementById('resultado').innerHTML = `Sua Necessidade Diária de Calorias (NDC) é: ${ndc.toFixed(2)} calorias/dia`;
}