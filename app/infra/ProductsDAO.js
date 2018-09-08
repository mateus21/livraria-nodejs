function ProductsDAO (connection) {
    this._connection = connection;
}

ProductsDAO.prototype.list = function(callback) {
    this._connection.query('select * from livros', callback);
}

ProductsDAO.prototype.save = function(product, callback) {
    this._connection.query('insert into livros SET ?', product, callback);
}

module.exports = function() {
    return ProductsDAO;
}