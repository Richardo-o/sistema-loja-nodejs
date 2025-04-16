import express from "express";

const router = express.Router();

router.get("/clientes/", (req,res)=>{

    const clientes = 
    [
        {
            imagem: "/images/bart.png",
            nome: "Bart",
            cpf: "421.656.674.00",
            endereco: "Rua A., 130, Avenida1",
          },
      
          {
            imagem: "/images/homer.png",
            nome: "Homer",
            cpf: "422.256.374.00",
            endereco: "Rua F., 15, Avenida2",
          },
      
          {
            imagem: "/images/finn.png",
            nome: "Finn",
            cpf: "132.856.664.00",
            endereco: "Rua B., 100, Avenida.AB",
          },
      
          {
            imagem: "/images/jake.png",
            nome: "Jake",
            cpf: "321.651.654.00",
            endereco: "Rua C., 110, Avenida3",
          },
      
          {
            imagem: "/images/clarencio.png", 
            nome: "Clarêncio",
            cpf: "221.631.654.00",
            endereco: "Rua Car., 112, AvenidaC2",
          }
    ]


    res.render ("clientes",{

        clientes : clientes,
        
    });

});

export default router;
