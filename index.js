import express from "express";
import connection from "./config/sequelize-config.js";

const app = express();

// Permite receber dados vindo de formulários

app.use(express.urlencoded({extended: false}))
app.use(express.json())


import ProdutosController from "./controllers/ProdutosController.js";
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";


app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);



app.get("/", (req, res) => {
  res.render("index.ejs");
});

connection.authenticate()
  .then(() => {
    console.log("COnexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS loja`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro: " + error);
  } else {
    console.log("O servidor foi iniciado com sucesso!");
  }
});
