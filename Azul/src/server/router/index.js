'use strict'

/**
 * The index.js file pulls in the files from the routes folder, 
 * and injects the app object and db object into each route.
 */
const routes = [
    // ADICIONAR ROTAS DE CADA TABELA DO BANCO
    require('./routes/usuario')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
    return routes.forEach((route) => {
        route(app, db);
    });
};