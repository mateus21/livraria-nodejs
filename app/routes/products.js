module.exports = function (app) {
    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.list(function(err, results) {
            res.format({
                html: function() {res.render('produtos/lista', {lista:results})},
                json: function() {res.json(results)}
            });
        });

        connection.end();

    });

    app.get('/produtos/json',function(req,res){
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.productsDAO(connection);

        productsDAO.lista(function(err, results){
            res.json(results);
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res) {
        var product = req.body;
        console.log(product);
        
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.save(product, function(err, results) {
            res.redirect('/produtos');
        });

    });
}