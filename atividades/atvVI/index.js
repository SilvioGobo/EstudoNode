const express = require('express');
const app = express();
const porta = 3005;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
            <h2 style="text-align: center; color: #333;">Calculadora de IMC</h2>
            <form action="/calcular" method="POST">
                <label>Peso (kg):</label><br>
                <input type="text" name="peso" placeholder="Ex: 70.5" required style="width: 100%; padding: 8px; margin: 5px 0 15px;"><br>
                
                <label>Altura (m):</label><br>
                <input type="text" name="altura" placeholder="Ex: 1.75" required style="width: 100%; padding: 8px; margin: 5px 0 15px;"><br>
                
                <button type="submit" style="width: 100%; padding: 10px; background-color: #0056b3; color: white; border: none; border-radius: 5px; cursor: pointer;">Calcular IMC</button>
            </form>
        </div>
    `);
});

app.post('/calcular', (req, res) => {
    const pesoText = req.body.peso.replace(',', '.');
    const alturaText = req.body.altura.replace(',', '.');

    const peso = parseFloat(pesoText);
    const altura = parseFloat(alturaText);

    if (!peso || !altura || altura === 0) {
        return res.send('<h1>Erro!</h1><p>Por favor, insira números válidos.</p><a href="/">Voltar</a>');
    }

    const imc = peso / (altura * altura);

    let classificacao = '';
    let grau = '';

    if (imc < 18.5) {
        classificacao = 'MAGREZA';
        grau = '0';
    } else if (imc < 25.0) {
        classificacao = 'NORMAL';
        grau = '0';
    } else if (imc < 30.0) {
        classificacao = 'SOBREPESO';
        grau = 'I';
    } else if (imc < 40.0) {
        classificacao = 'OBESIDADE';
        grau = 'II';
    } else {
        classificacao = 'OBESIDADE GRAVE';
        grau = 'III';
    }

    res.send(`
        <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; text-align: center;">
            <h2 style="color: #333;">Resultado do IMC</h2>
            <p style="font-size: 24px; margin: 10px 0;"><strong>${imc.toFixed(2)}</strong></p>
            <p style="font-size: 18px;"><strong>Classificação:</strong> <span style="color: #0056b3;">${classificacao}</span></p>
            <p style="font-size: 18px;"><strong>Grau de Obesidade:</strong> <span style="color: #d9534f;">${grau}</span></p>
            <br>
            <a href="/" style="text-decoration: none; background-color: #ccc; padding: 10px 20px; border-radius: 5px; color: black;">Calcular Novamente</a>
        </div>
    `);
});

app.listen(porta, () => {
    console.log(`Servidor rodando! Acesse: http://localhost:${porta}`);
});