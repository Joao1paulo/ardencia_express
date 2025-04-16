import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/pedidos", (req, res) => {

  //Array de objetos
  const pedidos = [
    {
      numeroPedido: 1001,
      valor: 7.90,
      cliente: "João Silva",
      produto: "Pimenta Malagueta"
    },
    {
      numeroPedido: 1002,
      valor: 8.20,
      cliente: "Maria Oliveira",
      produto: 'Pimenta Dedo-de-Moça'
    },
    {
      numeroPedido: 1003,
      valor: 10.00,
      cliente: "Carlos Souza",
      produto: "Pimenta Jalapeño"
    },
    {
      numeroPedido: 1004,
      valor: 12.50,
      cliente: "Ana Paula",
      produto: "Pimenta Habanero"
    },
    {
      numeroPedido: 1005,
      valor: 6.50,
      cliente: "Ricardo Almeida",
      produto: "Pimenta Biquinho"
    }
  ];

  res.render("pedidos", {
    // Enviando variáveis produto para a página
    pedidos: pedidos,
  });
});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };