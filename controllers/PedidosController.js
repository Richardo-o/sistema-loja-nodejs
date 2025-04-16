import express from "express";

const router = express.Router();


router.get("/pedidos/", (req, res) => {

    const pedidos = [
        {
            imagem: '/images/pao.png',
            numeroPedido: 1,
            valor: 20
        },
        {
            imagem: '/images/leite.webp',
            numeroPedido: 2,
            valor: 10
        },
        {
            imagem: '/images/limao.webp',
            numeroPedido: 3,
            valor: 5
        },
        {
            imagem: '/images/alho.png',
            numeroPedido: 4,
            valor: 35
        },
        {
            imagem: '/images/miojo.png',
            numeroPedido: 5,
            valor: 3
        }
    ]
    
        res.render("pedidos", {
    
            pedidos: pedidos,
            
        })
    
    });

export default router;
