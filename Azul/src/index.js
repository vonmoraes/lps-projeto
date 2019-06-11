'use strict';

/**
 * 
 */

const   express         = require('express');
const   bodyParser      = require('body-parser');
const   db              = require('./server/config/db.js');
const   env             = require('./server/config/env');
const   router          = require('./server/router/index');
//
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
        titulo: "Titulo Ponto de Controle",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nibh ac magna maximus porta. Praesent laoreet enim nisl, sit amet auctor massa sagittis a. Duis non vulputate elit. Vestibulum semper feugiat mauris a iaculis. In facilisis tellus in arcu gravida cursus eu ut erat. Phasellus dignissim ornare dolor, id dapibus ex imperdiet ut. Maecenas bibendum, orci vel viverra iaculis, augue lorem maximus enim, vel faucibus massa ante id magna.",
        valor_nota_orientador: 0,
        valor_nota_coordenador: 5,
        data_fechamento: '22/02/19'
    },
    segundo: {
        titulo: "Titulo Ponto de Controle",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nibh ac magna maximus porta. Praesent laoreet enim nisl, sit amet auctor massa sagittis a. Duis non vulputate elit. Vestibulum semper feugiat mauris a iaculis. In facilisis tellus in arcu gravida cursus eu ut erat. Phasellus dignissim ornare dolor, id dapibus ex imperdiet ut. Maecenas bibendum, orci vel viverra iaculis, augue lorem maximus enim, vel faucibus massa ante id magna.",
        valor_nota_orientador: 10,
        valor_nota_coordenador: 5,
        data_fechamento: '23/03/19'
    },
    terceiro: {
        titulo: "Titulo Ponto de Controle",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nibh ac magna maximus porta. Praesent laoreet enim nisl, sit amet auctor massa sagittis a. Duis non vulputate elit. Vestibulum semper feugiat mauris a iaculis. In facilisis tellus in arcu gravida cursus eu ut erat. Phasellus dignissim ornare dolor, id dapibus ex imperdiet ut. Maecenas bibendum, orci vel viverra iaculis, augue lorem maximus enim, vel faucibus massa ante id magna.",
        valor_nota_orientador: 15,
        valor_nota_coordenador: 5,
        data_fechamento: '27/05/19'
    },
    quarto: {
        titulo: "Titulo Ponto de Controle",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nibh ac magna maximus porta. Praesent laoreet enim nisl, sit amet auctor massa sagittis a. Duis non vulputate elit. Vestibulum semper feugiat mauris a iaculis. In facilisis tellus in arcu gravida cursus eu ut erat. Phasellus dignissim ornare dolor, id dapibus ex imperdiet ut. Maecenas bibendum, orci vel viverra iaculis, augue lorem maximus enim, vel faucibus massa ante id magna.",
        valor_nota_orientador: 50,
        valor_nota_coordenador: 5,
        data_fechamento: '25/06/19'
    }
};
/**
 * FIM VARIAVEIS DE TESTE @@@@@@@@@@@
 */


/**
 * pag inicial Aluno
 */
app.get('/',(request, response) => {
    response.render('aluno/home_aluno', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});


/**
 * pag inicial Aluno
 */
app.get('/pc',(request, response) => {
    response.render('ponto_controle/ponto_controle', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});


/**
 * pag inicial Administrador
 */
app.get('/administrador',(request, response) => {
    response.render('admin/home_admin', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});

/**
 * pag inicial Aluno
 */
app.get('/minha_conta',(request, response) => {
    response.render('conta/minha_conta', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});


/**
 * pag inicial Orientador
 */
app.get('/orientador',(request, response) => {
    response.render('orientador/home_orientador', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});

/**
 * pag inicial Coordenador
 */
app.get('/coordenador',(request, response) => {
    response.render('coordenador/home_coordenador', {
        mensagem : null,
        usuario,
        pastapc,
        ponto_controle,
        usuarios
    });
});

// Relativo a conta
app.get('/login', (request, response) => {
    response.render('conta/login', {
        mensagem : 'E-mail ou senha inválidos!'
    });
})
// 
app.get('/registro',(request, response) => {
    response.render('conta/registro');
});
//
app.get('/recuperar_senha',(request, response) => {
    response.render('conta/recuperar_senha');
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