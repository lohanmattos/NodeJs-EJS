//importa a biblioteca express
const express = require("express");

//Instancia o express
const app = express();

//Informa o tipo de ferramenta pra renderizar o html
app.set("view engine", "ejs");

//Cria as rotas principais
app.get("/", function(req, res){

    const text = "Lista de Tarefas" ;

    const items = [
        {
            title: "JavaScript",
            menssage:"Aprender a dev. aplicações em NodeJs."
        },
        {
            title: "FrontEnd",
            menssage:"Aprender a base do react."
        }
    ];

    res.render("pages/index", {
        qualitys:items,
        title_text:text,
    });
});

app.get("/sobre", function(req, res){
    res.render("pages/about");
});

//Ouve a Porta 3000
app.listen("3000");
console.log("Rodando");