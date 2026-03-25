
// importando (.env)
require('dotenv').config();

// importando o express
const express = require('express');

// criando uma aplicação express, aqui inicializando o nosso servidor
const app = express();
//const PORT = 3000;
const PORT = process.env.PORT 

// "/" significa rota principal (http://localhost:3000/)
app.get("/", (req, res) =>{

    //req = request (dados enviados pelo cliente)
    //res = response (resposta que vamos enviar)
    res.send('Olá Mundo, passo 2');
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

