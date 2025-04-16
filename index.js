// Importando o pacote do Express.js
// Modo CommonJS de importação
// const express = require("express");
// Modo ES6 de importação
import express from "express";
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Importando os controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js";
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");

app.use(express.static("public"));

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

// Configurando o express para utilizar as rotas dos Controllers
app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8081
  , (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
