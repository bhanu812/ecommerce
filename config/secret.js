module.exports = {
    "database": "mongodb://localhost:27017/ecommerce", //database: the URI with username and password to your MongoDB installation
    "port": process.env.PORT || 3000,
    "secretKey": "bhanu" //secret: used when we create and verify JSON Web Tokens
}
