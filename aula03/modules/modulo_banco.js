const { JsonDB, Config } = require('node-json-db');

const db = new JsonDB(new Config("Meu banco", true, false, '/'));

async function inserir(user) {
    try {
        await db.push(`/usuarios/${user.id}`, user);
        console.log(`Usuário ${user.nome} inserido com sucesso!`);  
    } catch (error) {
        console.error("Erro ao inserir", error);
    }
}

async function remover(id) {
    try {
        await db.delete(`/usuarios/${id}`);
        console.log(`Usuário de ${id} removido!`);
    } catch (error) {
        console.error("Erro ao remover", error);
    }
}

async function procurar(id) {
    try {
        const usuario = await db.getData(`/usuarios/${id}`);
        return usuario;
    } catch (error) {
        return null;
    }
}

module.exports = {
    inserir,
    remover,
    procurar
}