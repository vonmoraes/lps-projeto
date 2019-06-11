'use strict';

/**
 * CRUD da tabela coordenador
 */
module.exports = (app, db) => {

    // CREATE (Cria um único coordenador)
    app.post('/new_coordenador', (request, response) => {
        const id = request.params.id
        const confirmado = false
        db.coordenador.create({
            id : id,
            confirmado: confirmado
        }).then(novoCoordenador => {
            console.log(`Novo coordenador ${novoCoordenador.id} foi criado.`);
            response.json(novoCoordenador);
        });
    });

  // READ (Lista todos os coordenadores)
  app.get('/coordenadores', (request, response) => {
      db.coordenador.findAll()
      .then(coordenadores => {
          response.json(coordenadores);
        });
    });

  // READ (Retorna um único coordenador)
  app.get('/coordenador/:id', (request, response) => {
      const id = request.params.id;
      db.coordenador.findOne({
          where: { id: id}
        }).then(coordenador => {
            response.json(coordenador);
        });
    });

  // DELETE  (Deleta um único coordenador)
  app.delete('/coordenador/:id', (request, response) => {
      const id = request.params.id;
      db.coordenador.destroy({
          where: { id: id }
        })
        .then(deletedCoordenador => {
            response.json(deletedCoordenador);
        });
    });

};