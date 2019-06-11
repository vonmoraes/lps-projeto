'use strict'

/**
 * Inicialização do Sequelize e da instância sequelize. 
 * Anexa os objetos modelo ao banco db
 */


/**
 * Requerimentos
 */ 
const Sequelize = require('sequelize');
const env = require('./env');

/**
 * sequelize
 */
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Criar Tabelas e adicionalas ao db object
db.admin = require('../models/admin.js')(sequelize, Sequelize);
db.aluno = require('../models/aluno.js')(sequelize, Sequelize);
db.coordenador = require('../models/coordenador.js')(sequelize, Sequelize);
db.orientador = require('../models/orientador.js')(sequelize, Sequelize);
// db.pasta = require('../models/pasta.js')(sequelize, Sequelize);
// db.ponto_controle = require('../models/ponto_controle.js')(sequelize, Sequelize);
// db.solicitacao = require('../models/solicitacao.js')(sequelize, Sequelize);
db.usuario = require('../models/usuario.js')(sequelize, Sequelize);

// Relações entre as tabelas
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);


// Exportar db para uso na aplicação
module.exports = db;