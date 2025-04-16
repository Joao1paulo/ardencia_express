import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {

  //Array de objetos
  const produtos = [
    {
      imagem: '/images/pimentas/malagueta.jpeg',
      nome: 'Pimenta Malagueta',
      preco: 7.90,
      categoria: 'Fresca'
    },
    {
      imagem: '/images/pimentas/biquinho.jpg',
      nome: 'Pimenta Biquinho',
      preco: 6.50,
      categoria: 'Conserva'
    },
    {
      imagem: '/images/pimentas/dedomoca.webp',
      nome: 'Pimenta Dedo-de-Moça',
      preco: 8.20,
      categoria: 'Fresca'
    },
    {
      imagem: '/images/pimentas/jalapeno.jpg',
      nome: 'Pimenta Jalapeño',
      preco: 10.00,
      categoria: 'In natura'
    },
    {
      imagem: '/images/pimentas/habanero.webp',
      nome: 'Pimenta Habanero',
      preco: 12.50,
      categoria: 'Fresca'
    },
    {
      imagem: '/images/pimentas/calabresa.png',
      nome: 'Pimenta Calabresa',
      preco: 5.90,
      categoria: 'Desidratada'
    }
  ];

  res.render("produtos", {
    // Enviando variáveis produto para a página
    produtos: produtos,
  });
});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };