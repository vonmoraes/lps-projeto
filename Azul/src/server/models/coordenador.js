'use strict'

/**
 * Cria a tabela COORDENADOR se ela não existir e exporta para uso na aplicação
 */
module.exports = (sequelize, DataTypes) => {
    const Coordenador = sequelize.define('coordenador', {
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
        tableName: 'coordenador',
        paranoid: true,
        underscored: true
    });
    return Coordenador;
};