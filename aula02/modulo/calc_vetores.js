function media(vetor) {
    if (!vetor || vetor.length === 0) return 0;
    const soma = vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma / vetor.length;
}

function menor(vetor) {
    if (!vetor || vetor.length === 0) return null;
    return Math.min(...vetor);
}

function maior(vetor) {
    if (!vetor || vetor.length === 0) return null;
    return Math.max(...vetor);
}

module.exports = {
    media,
    menor,
    maior
}