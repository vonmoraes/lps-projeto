'use strict'

/**
 * O arquivo index.js puxa os arquivos da pasta 'routes',
 * e injeta cada objeto da aplicacao nas rotas correspondentes.
 */
const routes = [
    // Adicionar as rotas do banco de dados.
    require('./routes/admin'),
    require('./routes/aluno'),
    require('./routes/coordenador'),
    require('./routes/orientador'),
    // require('./routes/pasta'),
    // require('./routes/ponto_controle'),
    // require('./routes/solicitacao'),
    require('./routes/usuario')

];


// Adicionar acesso aos objetos em cada 'route'.
module.exports = function router(app, db) {
    return routes.forEach((route) => {
        route(app, db);
    });
};