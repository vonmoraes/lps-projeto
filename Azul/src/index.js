'use strict';

/**
 * TUTORIAL: https://lorenstewart.me/2016/10/03/sequelize-crud-101/
 * https://stackoverflow.com/questions/46887610/node-js-sequelize-orm-simple-crudcreate-read-update-and-delete-example
 * https://www.robinwieruch.de/postgres-express-setup-tutorial/
 * http://docs.sequelizejs.com/manual/getting-started
 */

const   express         = require('express');
const   bodyParser      = require('body-parser');
const   db              = require('./server/config/db.js');
const   env             = require('./server/config/env');
const   router          = require('./server/router/index');
// Adicionado posteriormente 
const   path            = require('path');


const app = express();
const PORT = env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app, db);

/**
 * VARIAVEIS DE TESTE @@@@@@@@@@@
 */
const usuarios = [
    "Luana Duarte", "Lucas Moraes",
    "Breno Aroeira", "Henrique Schiess",
    "Carlos Saldanha"
];

const usuario = {
    nome: 'Luana Duarte',
    matricula: '538464',
    email: 'ludsf@email.com'
};

const ponto_controle = {
    descricao_atividade : 'teste_descricao_atividade',
    parecer_orientador : "teste_parecer_orientador",
    data_submissao : '21/04/19',
    nota_orientador : 1,
    nota_coordenador : 2,
    // 1 Avaliado 0 Nao avaliado
    status_pc : 1,
    orientador_id : 'Fulano',
    aluno_id : 'Ciclano',
    pasta_ponto_controle_id : 'pc'
};

const pastapc = {
    primeiro: {
        titulo: "teste_titulo",
        descricao: "teste_descricao",
        valor_nota_orientador: 0,
        valor_nota_coordenador: 5,
        data_fechamento: '22/02/19'
    },
    segundo: {
        titulo: "teste_titulo",
        descricao: "teste_descricao",
        valor_nota_orientador: 10,
        valor_nota_coordenador: 5,
        data_fechamento: '23/03/19'
    },
    terceiro: {
        titulo: "teste_titulo",
        descricao: "teste_descricao",
        valor_nota_orientador: 15,
        valor_nota_coordenador: 5,
        data_fechamento: '27/05/19'
    },
    quarto: {
        titulo: "teste_titulo",
        descricao: "teste_descricao",
        valor_nota_orientador: 50,
        valor_nota_coordenador: 5,
        data_fechamento: '25/06/19'
    }
};
/**
 * FIM VARIAVEIS DE TESTE @@@@@@@@@@@
 */


/**
 * pag inicial
 */
app.get('/',(request, response) => {
    response.render('conta/login');
});

//Se houver conexao com o banco 'listening' na porta de env
db.sequelize.sync().then(() => {
    app.listen(PORT, (err) => {
        if(err){
            console.log(`Não foi possível realizar conexão, error: '${err}'`);
        }
        else{
            console.log('Express conectado na porta:', PORT);
        }
    });
});