var app = require('./config/express')();


app.get('/', function(req, res) {
    res.send("<html><body><h1>Olá Mundo!</h1></body></html>");
});


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});