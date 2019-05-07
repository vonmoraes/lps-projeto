/**
 * CRIANDO COM OS TUTORIAIS 
 * https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
 * https://node-postgres.com
 * 
 * 
 * https://www.robinwieruch.de/postgres-express-setup-tutorial/
 * http://www.postgresqltutorial.com/
 * http://docs.sequelizejs.com/manual/getting-started
 */


const { Pool, Client } = require('pg');
const Sequelize = require("sequelize");

const pool = new Pool({
    user        : 'postgres',
    host        : 'localhost',
    database    : 'api-azul',
    password    : '7754234',
    port        : 5432,
});

pool.query('SELECT NOW()', (err, res) => {
    console.log("pool");
    // console.log(err, res)
    // pool.end()
});

const client = new Client({
    user        : 'postgres',
    host        : 'localhost',
    database    : 'api-azul',
    password    : '7754234',
    port        : 5432,
});

client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log("client");
    //   console.log(err, res);
    client.end();
})


const sequelize = new Sequelize('api-azul', 'postgres', '7754234', {
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log("Conectado com sucesso"))
    .catch((erro) => console.log("Falha ao se conectar: " + erro));


//
// const Users = sequelize.define('users', {
//     id              : {
//         type: Sequelize.INTEGER
//     },
//     name            : {
//         type: Sequelize.TEXT
//     },
//     email          : {
//         type: Sequelize.TEXT
//     }
// });

// const get_users = async(request, response) => {
//     await 
// };

const get_users2 = (request,response) => {
    client.connect();
    const users = client.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        results.json(rows);
    })
    console.log(users)
 }

    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // console.log(results.rows)
    return results.rows;
});

const get_users = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      users = results.rows;
      response.render('teste', {
          users
      })
  
    })
}

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    response.status(200).json(results.rows)

  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
// // sequelize
// const create_user = 


// //
const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
    get_users,
    get_users2,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}