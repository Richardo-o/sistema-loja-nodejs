const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const cliente = req.params.clientes;
  const clientes = [
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
    },
  ];

  res.render("clientes", {
    clientes: clientes,
    cliente: cliente,
  });
});

app.get("/produtos", (req, res) => {
  const produto = req.params.produtos;
  const produtos = [
    {
      nome: "Celular",
      preco: 1500,
      categoria: "Eletrônico",
    },
    {
      nome: "Computador",
      preco: 2500,
      categoria: "Eletrônico",
    },
    {
      nome: "Mouse",
      preco: 300,
      categoria: "Eletrônico",
    },
    {
      nome: "Danone",
      preco: 5,
      categoria: "Comida",
    },
    {
      nome: "Leite",
      preco: 15,
      categoria: "Comida",
    },
  ];

  res.render("produtos", {
    produtos: produtos,
    produto: produto,
  });
});

app.get("/pedidos", (req, res) => {

const pedido = req.params.pedidos;
const pedidos = [
    {
        numeroPedido: 1,
        valor: 2500
    },
    {
        numeroPedido: 2,
        valor: 2000
    },
    {
        numeroPedido: 3,
        valor: 300
    },
    {
        numeroPedido: 4,
        valor: 15
    },
    {
        numeroPedido: 5,
        valor: 2500
    }
]

    res.render("pedidos", {

        pedidos: pedidos,
        pedido: pedido

    })

});

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro: " + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
