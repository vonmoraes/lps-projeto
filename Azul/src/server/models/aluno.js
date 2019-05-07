'use strict'

/**
 * Cria a tabela ALUNO se ela não existir e exporta para uso na aplicação
 */
module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('aluno', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo_tcc: {
            type: DataTypes.STRING,
            required: true
        },
        orientador_id: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        tableName: 'aluno',
        paranoid: true,
        underscored: true
    });
    return Aluno;
};