'use strict';

/**
 * CRUD da tabela ADMIN
 */
module.exports = (app, db) => {

    // CREATE (Cria um único administrador)
    app.post('/new_admin', (request, response) => {
        const id = request.params.id
        db.admin.create({
            id : id
        }).then(novoAdmin => {
            console.log(`Novo admin ${novoAdmin.id} foi criado.`);
            response.json(novoAdmin);
        });
    });

  // READ (Lista todos os admin)
  app.get('/admin', (request, response) => {
      db.admin.findAll()
      .then(administradores => {
          response.json(administradores);
        });
    });

  // READ (Retorna um único admin)
  app.get('/admin/:id', (request, response) => {
      const id = request.params.id;
      db.admin.findOne({
          where: { id: id}
        }).then(adminstrador => {
            response.json(adminstrador);
        });
    });

  // DELETE  (Deleta um único admin)
  app.delete('/admin/:id', (request, response) => {
      const id = request.params.id;
      db.admin.destroy({
          where: { id: id }
        })
        .then(deletedAdmin => {
            response.json(deletedAdmin);
        });
    });

};