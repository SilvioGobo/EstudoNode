const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const C = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    red: '\x1b[31m',
    magenta: '\x1b[35m'
};

function ask(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

function num(val) {
    const n = parseFloat(val.replace(',', '.'));
    return isNaN(n) ? null : n;
}

async function main() {
    console.log(C.cyan + '\n--- Calculadora Geométrica ---' + C.reset);

    const base = num(await ask(C.yellow + 'Digite o valor da base (L): ' + C.reset));
    const altura = num(await ask(C.yellow + 'Digite o valor da altura (A): ' + C.reset));

    if (base === null || altura === null || base <= 0 || altura <= 0) {
        console.log(C.red + '\nErro: Valores inválidos. Digite apenas números maiores que zero.' + C.reset);
        rl.close();
        return;
    }

    const area = base * altura;

    let tipoFigura = '';

    if (base === altura) {
        tipoFigura = 'Quadrado';
    } else {
        tipoFigura = 'Retângulo';
    }

    console.log(C.green + '\n--- Resultado ---' + C.reset);
    console.log(`Área da figura: ${area.toFixed(2)}`);
    console.log(`A figura analisada é um: ${C.magenta}${tipoFigura}${C.reset}\n`);

    rl.close();
}

main();