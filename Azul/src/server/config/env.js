'use strict';


/**
 * Informações do ambiente de desenvolvimento. 
 */


/**
 * Variavel de ambiente contendo configurações do ambiente da aplicação
 */
const env = {
    PORT: process.env.PORT || 3000,
//  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/sequelize_blog_post',
    DATABASE_NAME: process.env.DATABASE_NAME || 'api-azul',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '7754234',
    DATABASE_PORT: process.env.DATABASE_PORT || 5432,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
    //
    NODE_ENV: process.env.NODE_ENV || 'development',
};

// Exportar a variavel de ambiente
module.exports = env;