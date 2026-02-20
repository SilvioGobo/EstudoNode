const calc = require("./modulo/calc_vetores");

console.log("=== Operação com Vetores ===");

const vetorA = [10, 4, 6, 2, 7];

console.log("Vetor analisado: ", vetorA);

const resultadoMedia = calc.media(vetorA);
const resultadoMaior = calc.maior(vetorA);
const resultadoMenor = calc.menor(vetorA);

console.log("=== Resultados ===");
console.log(`Média: ${resultadoMedia}`);
console.log(`Maior Vetor: ${resultadoMaior}`);
console.log(`Menor Vetor: ${resultadoMenor}`);


