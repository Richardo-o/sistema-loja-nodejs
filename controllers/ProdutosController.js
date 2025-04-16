import express from "express";
// Carregando o método do Express para gerenciamento de Rotas

const router = express.Router();

// ROTA DE PRODUTOS

router.get("/produtos/", (req,res) =>{

    const produtos = [
        {
            imagem: "/images/pao.png",
            nome: "Pão",
            preco: 20,
            categoria: "Alimentício"
        },
        {
            imagem: "/images/leite.webp",
            nome: "Leite",
            preco: 10,
            categoria: "Alimentício"
        },
        {
            imagem: "/images/limao.webp",
            nome: "limão",
            preco: 5,
            categoria: "Alimentício"
        },
        {
            imagem: "/images/alho.png",
            nome: "Alho-poró",
            preco: 35,
            categoria: "Alimentício"
        },
        {
            imagem: "/images/miojo.png",
            nome: "Miojo",
            preco: 3,
            categoria: "Alimentício"
        }
    ]

    res.render("produtos",{
        // Enviando a variável produto para a página
        produtos : produtos,
        // o produto da esquerda é a variável que é chamada na página
        // o produto no lado direito é o valor da variável
    });
});

// Exportando o módulo
export default router;
