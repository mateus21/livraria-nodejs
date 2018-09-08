module.exports = function (app) {
    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productsDB = new app.infra.ProductsDAO(connection);

        productsDB.list(function(err, results) {
            res.render('produtos/lista', {lista:results});
        });

        connection.end();

    });
}