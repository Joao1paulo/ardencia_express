import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/clientes", (req, res) => {

  //Array de objetos
  const clientes = [
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      endereco: "Rua das Flores, 123 - Registro/SP"
    },
    {
      nome: "Maria Oliveira", 
      cpf: "987.654.321-00",
      endereco: "Av. Brasil, 456 - Iguape/SP"
    },
    {
      nome: "Carlos Souza",
      cpf: "321.654.987-00",
      endereco: "Rua do Comércio, 789 - Pariquera-Açu/SP"
    },
    {
      nome: "Ana Paula",
      cpf: "456.123.789-00",
      endereco: "Travessa Central, 101 - Sete Barras/SP"
    },
    {
      nome: "Ricardo Almeida",
      cpf: "789.321.456-00",
      endereco: "Rua dos Ipês, 202 - Eldorado/SP"
    }
  ];


  res.render("clientes", {
    // Enviando variáveis produto para a página
    clientes: clientes,
  });

});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };


