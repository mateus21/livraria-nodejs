module.exports = function(app)  {
    app.get('/',function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProductsDAO(connection);
        
        produtosDAO.list(function(erros,resultados){
            res.render('home/index',{livros:resultados});
        });
        
        connection.end();    
    });  
}