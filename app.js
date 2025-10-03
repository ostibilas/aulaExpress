// importa o modulo express
const express = require("express");

//criar uma instancia do express, que representa o aplicativo web
const app = express();
//define o numero da porta do servidor backend vai escutar requisições
const PORT = 8081;
// inicia o serviror que fica escutando a porta pre definida
app.listen(PORT, ()=>{

   console.log(`servidor rodando na porta ${PORT}`);

})//sempre a ultima linha do codigo