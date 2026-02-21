const readline = require('readline');
const calc = require('./modulo/calc_vetores');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

function num(val) {
    const n = parseFloat(val.replace(',', '.'));
    return isNaN(n) ? null : n;
}

async function main() {
    console.log('\n--- Analisador de Vetores ---');

    const tamanho = num(await ask('Quantos números você quer adicionar ao vetor? '));

    if (tamanho === null || tamanho <= 0) {
        console.log('Quantidade inválida. Digite um número maior que zero.');
        rl.close();
        return; 
    }

    const meuVetor = [];

    console.log('\nDigite os valores abaixo:');

    for (let i = 0; i < tamanho; i++) {
        let valor = num(await ask(`Digite o ${i + 1}º número: `));
        
        if (valor === null) {
            console.log('Valor inválido. Vou considerar como 0.');
            valor = 0;
        }

        meuVetor.push(valor);
    }

    console.log('\nVetor digitado:', meuVetor);

    console.log('\n--- Resultados ---');
    console.log(`Média: ${calc.media(meuVetor).toFixed(2)}`);
    console.log(`Menor valor: ${calc.menor(meuVetor)}`);
    console.log(`Maior valor: ${calc.maior(meuVetor)}\n`);

    rl.close();
}

main();