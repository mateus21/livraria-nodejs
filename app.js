var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.send("<html><body><h1>Olá Mundo!</h1></body></html>");
});


app.get('/produtos', function(req, res) {
    res.render("produtos/lista");
});




app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});