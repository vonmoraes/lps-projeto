'use strict';

/**
 * CRUD da tabela ALUNO
 */
module.exports = (app, db) => {

    // CREATE (Cria um único aluno)
    app.post('/new_aluno', (request, response) => {
        const id = request.param.id;
        const titulo_tcc = request.body.titulo_tcc;
        const orientador_id = request.body.orientador_id;
        db.aluno.create({
            id: id,
            titulo_tcc: titulo_tcc,
            orientador_id: orientador_id
        }).then(novoAluno => {
            console.log(`Novo aluno do tcc: ${novoAluno.titulo_tcc} 
            com orientador: ${novoAluno.orientador_id},
            foi criado.`);
            response.json(novoAluno);
        });
    });

  // READ (Lista todos os alunos)
  app.get('/alunos', (request, response) => {
      db.aluno.findAll()
      .then(alunos => {
          response.json(alunos);
        });
    });

  // READ (Retorna um único aluno)
  app.get('/aluno/:id', (request, response) => {
      const id = request.params.id;
      db.aluno.findOne({
          where: { id: id}
        }).then(aluno => {
            response.json(aluno);
        });
    });

  // DELETE  (Deleta um único aluno)
  app.delete('/aluno/:id', (request, response) => {
      const id = request.params.id;
      db.aluno.destroy({
          where: { id: id }
        })
        .then(deletedAluno => {
            response.json(deletedAluno);
        });
    });

};