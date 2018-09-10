module.exports = function (app) {
    app.get('/produtos', function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.list(function(err, results) {
            if(err) {
                return next(err);//notifica o express sobre o erro
            }
            res.format({
                html: function() {res.render('produtos/lista', {lista:results})},
                json: function() {res.json(results)}
            });
        });

        connection.end();

    });

    app.get('/produtos/json',function(req,res, next){
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.productsDAO(connection);

        productsDAO.lista(function(err, results){
            if(err) {
                return next(err);//notifica o express sobre o erro
            }
            res.json(results);
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form', {errosValidacao:{}, product:{}});
    });

    app.post('/produtos', function(req, res, next) {
        var product = req.body;
        
        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();
        var erros = req.validationErrors();

        if(erros){
            res.format({
                html: function() {
                    res.status(400).render('produtos/form', {errosValidacao: erros, product: product});
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });
            
            return;
        }
        
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.save(product, function(err, results) {
            if(err) {
                return next(err);//notifica o express sobre o erro
            }
            res.redirect('/produtos');
        });

    });
}