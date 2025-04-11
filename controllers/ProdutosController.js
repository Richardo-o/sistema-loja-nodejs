import express from "express";
// Carregando o método do Express para gerenciamento de Rotas

const router = express.Router();

// ROTA DE PRODUTOS

router.get("/produtos/", (req,res) =>{

    const produtos = [
        {
            nome: "Celular Motorola E22",
            preco: 1200,
            categoria: "Eletroportáteis"
        },
        {
            nome: "Tablet Samsung",
            preco: 900,
            categoria: "Eletrônicos"
        },
        {
            nome: "Notebook Lenovo",
            preco: 3200,
            categoria: "Computadores"
        },
        {
            nome: "Fone Bluetooth",
            preco: 150,
            categoria: "Periféricos"
        },
        {
            nome: "Chinelo",
            preco: 30,
            categoria: "Calçados"
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
