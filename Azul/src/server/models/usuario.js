'use strict'

/**
 * Cria a tabela USUARIO se ela não existir e exporta para uso na aplicação
 */
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true
        },
        senha_hash : {
            type: DataTypes.CHAR,
            required: true
        },
        email_confirmado: {
            type: DataTypes.BOOLEAN,
            required: false
        }
    }, 
    {
        tableName: 'usuario',
        paranoid: true,
        underscored: true
    });
    return Usuario;
};