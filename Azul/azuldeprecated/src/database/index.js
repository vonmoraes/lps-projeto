
const Sequelize = require("sequelize");
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'apiazul',
  password: 'password',
  port: 5432,
});

const sequelize = new Sequelize({
    ...pool,

    dialect: 'postgres',
    
    dialectOptions: {
        ssl: true
    },
    define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    }
});

sequelize.authenticate()
    .then(() => console.log("Conectado com sucesso"))
    .catch((erro) => console.log("Falha ao se conectar: " + erro));

/** Routes para usuarios
 * get /users -> get_users()
 * get /users/:id -> get_user()
 * post users -> create_user()
 * put /user/:id -> update_user()
 * delete /user/:id -> delete_user()
 */

 /**
  * CRUD
  */

