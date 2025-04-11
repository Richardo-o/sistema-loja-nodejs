import express from "express";

const router = express.Router();

router.get("/clientes/", (req,res)=>{

    const clientes = 
    [
        {
            nome: "João",
            cpf: "421.656.674.00",
            endereco: "Rua A., 130, Avenida1",
          },
      
          {
            nome: "Pedro",
            cpf: "422.256.374.00",
            endereco: "Rua F., 15, Avenida2",
          },
      
          {
            nome: "Ricardo",
            cpf: "132.856.664.00",
            endereco: "Rua B., 100, Avenida.AB",
          },
      
          {
            nome: "Maria",
            cpf: "321.651.654.00",
            endereco: "Rua C., 110, Avenida3",
          },
      
          {
            nome: "Paulo",
            cpf: "221.631.654.00",
            endereco: "Rua Car., 112, AvenidaC2",
          }
    ]


    res.render ("clientes",{

        clientes : clientes,
        
    });

});

export default router;
