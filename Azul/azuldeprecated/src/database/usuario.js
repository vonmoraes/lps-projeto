
// 

const usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        //
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
    });
  
    return Usuario;
  };
  
  export default usuario;