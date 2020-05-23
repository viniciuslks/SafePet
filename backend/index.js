var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Servidor rodando na porta 3001!');
});

//PARA STARTAR O SERVIDOR RODAR NO TERMINAL/PROMPT DE COMANDO: npm run dev(estando dentro do diretório "backend")