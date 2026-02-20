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
    red: '\x1b[31m'
};

function ask(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

function num(val) {
    const n = parseFloat(val.replace(',', '.'));
    return isNaN(n) ? null : n;
}

async function main() {
    console.log(C.cyan + '\n--- Sistema de Vendas ---' + C.reset);
    console.log(C.yellow + 'Preencha os dados abaixo:\n' + C.reset);

    const precoUnitario = num(await ask('Preço unitário (R$): '));
    const quantidade = num(await ask('Quantidade vendida: '));
    const desconto = num(await ask('Valor do desconto (R$): '));

    if (precoUnitario === null || quantidade === null || desconto === null) {
        console.log(C.red + '\nErro: Você digitou um valor inválido. Digite apenas números.' + C.reset);
        rl.close();
        return;
    }

    const subtotal = precoUnitario * quantidade;
    const precoFinal = subtotal - desconto;

    console.log(C.green + '\n--- Resultado ---' + C.reset);
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total a pagar: R$ ${precoFinal.toFixed(2)}`);

    rl.close();
}

main();