import express from "express";

const router = express.Router();


router.get("/pedidos/", (req, res) => {

    const pedidos = [
        {
            imagem1: '/images/pedido1.png',
            numeroPedido: 1,
            valor: 1200
        },
        {
            imagem2: '/images/pedido2.png',
            numeroPedido: 2,
            valor: 900
        },
        {
            imagem3: '/images/pedidos3.png',
            numeroPedido: 3,
            valor: 3200
        },
        {
            imagem4: '/images/pedidos4.png',
            numeroPedido: 4,
            valor: 150
        },
        {
            imagem5: '/images/pedidos5.png',
            numeroPedido: 5,
            valor: 30
        }
    ]
    
        res.render("pedidos", {
    
            pedidos: pedidos,
            
        })
    
    });

export default router;
