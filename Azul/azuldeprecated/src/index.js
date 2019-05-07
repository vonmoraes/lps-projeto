/**
 * 
 */
// import { create_table as database } from "database";
// import * as name from "module-name";
const db = require('./database/teste');

/**
 * Modulos e dependencias
 */

const express = require('express'); // request response
const path = require('path'); // caminho absoluto
//const sqlite = require('sqlite'); // database
const body_parser = require('body-parser'); // object do body

/**
 * Aplicacao e definicoes da aplicacao
 */

const app = express();

// Relativo a views e pastas
app.use(express.static(path.join(__dirname, 'public'))); // dir public como publico
//app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views')); // dir views como as views da aplicao
app.set('view engine', 'ejs'); // ejs como padrao de renderizacao de views
// Relativo a database e manipulacao de variaveis
// const db_connection = sqlite.open(path.resolve(__dirname, 'nome_banco.sqlite'), { Promise });
app.use(body_parser.json()); // TODO: talvez retirar
app.use(body_parser.urlencoded({ extended: false}));


const port = process.env.PORT || 3000;
/**
 * Autorizacao admin
 */

app.use('/admin', (request, response, next) =>{
    if(request.hostname === 'localhost'){
        next();
    }
    else {
        response.send('Local error: não permitido. ');
    }
});

/**
 * Callback Functions:
 */

// Variaveis de teste
usuarios = [
    "Luana Duarte", "Lucas Moraes",
    "Breno Aroeira", "Henrique Schiess",
    "Carlos Saldanha"
];

usuario = {
    nome: 'Luana Duarte',
    matricula: '538464',
    email: 'ludsf@email.com'
};

ponto_controle = {
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

pastapc = {
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


app.get('/', (request, response) =>{
    // response.send('Estou Funcionando');
    response.render('conta/login',{
        usuario,
        usuarios
    });
}); 


app.get('/aluno', (request, response) => {
    response.render('aluno/home_aluno', {
        usuario,
        pastapc,
        ponto_controle
    });
});

app.get('/orientador', (request, response) => {
    response.render('orientador/home_orientador', {
        usuario,
        pastapc,
        ponto_controle
    });
});

app.get('/coordenador', (request, response) => {
    response.render('coordenador/home_coordenador', {
        usuario,
        pastapc,
        ponto_controle
    })
});

// Relativo a adm e login

app.get('/admin', (request, response) => {
    response.render('admin/home_admin',{
        usuario,
    });
});

app.get('/login', (request, response) => {
    response.render('conta/login');
});

app.get('/registro', (request, response) => {
    response.render('conta/registro')
});

/**
 * TESTE BD + POSTGRES
 */

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/teste2', db.get_users)
app.get('/teste', (request,response) => {
    const testuser = db.get_users2;
    users = [ { id: 1, name: 'lucas', email: 'lucas@lucas' },
    { id: 2, name: 'teste1', email: 'teste1@lucas' },
    { id: 3, name: 'teste2', email: 'teste2@lucas' },
    { id: 4, name: 'teste3', email: 'teste3@lucas' } ];
    console.log(testuser);
    response.render('teste', {
        users
    })
})

/**
 * App listen
 */
app.listen(port, (err) => {
    if(err){
        console.log(`Não foi possível realizar conexão, error: '${err}'`);
    }
    else{
        // database.create_table;
        console.log(`Conexão estabelecida com sucesso!`);
    }
})