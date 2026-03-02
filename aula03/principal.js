const datas = require('./modules/modulo_datas');
const banco = require('./modules/modulo_banco');

async function main() {
    console.log("=== Atividade IV (Datas) ===");

    const dataTeste = '2026-03-01T15:30:00';
    console.log('Data formatada (DD:MM:YYYY):', datas.data(dataTeste));
    console.log('Data formatada (HH:MM):', datas.hora(dataTeste));
    console.log('Data por extenso:', datas.dataExtenso(dataTeste));

    console.log("\n=== Atividade V (Banco) ===");

    const novoUsuario = {
        id: 1,
        nome: "Silvio",
        curso: "Engenharia de Software"
    };

    console.log('Ação: Inserindo usuário');
    await banco.inserir(novoUsuario);

    console.log('Ação: Procurando usuário de id 1');
    const usuarioEncontrado = await banco.procurar(1);
    console.log('Resultado da busca: ', usuarioEncontrado);

    console.log('Ação: Removendo usuário de id 1');
    await banco.remover(1);

    const verificacao = await banco.procurar(1);
    if (!verificacao) {
        console.log('Confirmação: O usuário foi deletado do banco!');
    }
}

main();