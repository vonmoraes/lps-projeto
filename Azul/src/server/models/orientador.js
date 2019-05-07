'use strict'

/**
 * Cria a tabela ORIENTADOR se ela não existir e exporta para uso na aplicação
 */
module.exports = (sequelize, DataTypes) => {
    const Orientador = sequelize.define('orientador', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        confirmado: {
            type: DataTypes.BOOLEAN,
            required: false
        }
    }, 
    {
        tableName: 'orientador',
        paranoid: true,
        underscored: true
    });
    return Orientador;
};