'use strict'

/**
 * Cria a tabela ADMIN se ela não existir e exporta para uso na aplicação
 */
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, 
    {
        tableName: 'admin',
        paranoid: true,
        underscored: true
    });
    return Admin;
};