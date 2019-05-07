'use strict'

/** NOTA:  
 * is the more interesting of the two files. Here we initialize Sequelize, 
 * and pull in the models. Sequelize (capitalized), the sequelize 
 * instance (not capitalized), and the models are attached to a db object. 
 * This db object is exported for app-wide use.
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
db.usuario = require('../models/usuario.js')(sequelize, Sequelize);

// Relações entre as tabelas
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);


// Exportar db para uso na aplicação
module.exports = db;