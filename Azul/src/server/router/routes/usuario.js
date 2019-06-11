'use strict';

/**
 * CRUD da tabela USUARIO
 */
module.exports = (app, db) => {

    // CREATE (Cria um único usuário)
    app.post('/new_usuario', (request, response) => {
        const nome = request.body.nome;
        const email = request.body.email;
        const senha = request.body.senha;
        db.usuario.create({
            nome: nome,
            email: email,
            senha_hash : senha
        }).then(novoUsuario => {
            console.log(`Novo usuario ${novoUsuario.nome} 
            email ${novoUsuario.email},
            com id ${novoUsuario.id} foi criado.`);
            response.json(novoUsuario);
        });
    });

  // READ (Lista todos os usuários)
  app.get('/usuarios', (request, response) => {
      db.usuario.findAll()
      .then(usuarios => {
          response.json(usuarios);
        });
    });

  // READ (Retorna um único usuario)
  app.get('/usuario/:id', (request, response) => {
      const id = request.params.id;
      db.usuario.findOne({
          where: { id: id}
        }).then(usuario => {
            response.json(usuario);
        });
    });

  // UPDATE (Altera um único usuario)
  app.patch('/usuario/:id', (request, response) => {
      const id = request.params.id;
      const nome = request.body.nome;
      const email = request.body.email;
      const senha = request.body.senha;
      const updates = {
          nome,
          email,
          senha
        }
        db.usuario.findOne({
            where: { id: id }
        })
        .then(usuario => {
            return usuario.update(updates)
        })
        .then(updatedUsuario => {
            response.json(updatedUsuario);
        });
    });

  // DELETE  (Deleta um único usuario)
  app.delete('/usuario/:id', (request, response) => {
      const id = request.params.id;
      db.usuario.destroy({
          where: { id: id }
        })
        .then(deletedUsuario => {
            response.json(deletedUsuario);
        });
    });

};