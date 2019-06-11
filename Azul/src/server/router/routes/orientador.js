'use strict';

/**
 * CRUD da tabela ORIENTADOR
 */
module.exports = (app, db) => {

    // CREATE (Cria um único orientador)
    app.post('/new_orientador', (request, response) => {
        const id = request.params.id
        const confirmado = false
        db.orientador.create({
            id : id,
            confirmado: confirmado
        }).then(novoOrientador => {
            console.log(`Novo orientador ${novoOrientador.id} foi criado.`);
            response.json(novoOrientador);
        });
    });

  // READ (Lista todos os orientadores)
  app.get('/orientadores', (request, response) => {
      db.orientador.findAll()
      .then(orientadores => {
          response.json(orientadores);
        });
    });

  // READ (Retorna um único orientador)
  app.get('/orientador/:id', (request, response) => {
      const id = request.params.id;
      db.orientador.findOne({
          where: { id: id}
        }).then(orientador => {
            response.json(orientador);
        });
    });

  // DELETE  (Deleta um único orientador)
  app.delete('/orientador/:id', (request, response) => {
      const id = request.params.id;
      db.orientador.destroy({
          where: { id: id }
        })
        .then(deletedOrientador => {
            response.json(deletedOrientador);
        });
    });

};