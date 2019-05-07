/**
 * 
 */

const path = require('path'); // caminho absoluto
const sqlite = require('sqlite'); // database
const db_connection = sqlite.open(path.resolve(__dirname, 'azul_database.sqlite'), { Promise });

const table_aluno = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Aluno (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo_tcc TEXT NOT NULL);`);
}

const table_orientador = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Orientador (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        confirmado TINYINT NOT NULL
    );`);
}

const table_coordenador = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Coordenador (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        confirmado TINYINT NOT NULL
    );`);
}

const table_admin = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Admin (
        id INTEGER PRIMARY KEY AUTOINCREMENT
    );`);
}

const table_usuario = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Usuario (
        id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL,
        confirmacao TINYINT
    );`);
}

const table_solicitacao = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Solicitacao (
        id INTEGER PRIMARY KEY,
        solicitante INTEGER,
        solicitado INTEGER,
        solicitacao_aberta TINYINT
    );`);
}

const table_ponto_controle = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Ponto_controle (
        id INTEGER PRIMARY KEY,
        descricao_atividade TEXT NOT NULL,
        parecer_orientador TEXT,
        data_submissao DATE NOT NULL,
        nota_orientador FLOAT,
        nota_coordenador FLOAT,
        status_pc TINYINT,
        orientador_id INTEGER NOT NULL,
        aluno_id INTEGER NOT NULL,
        pasta_ponto_controle_id INTEGER NOT NULL
    );`);
}

const table_pasta_ponto_controle = async() => {
    const db = await db_connection;
    await db.run(`CREATE TABLE IF NOT EXISTS Pasta_ponto_controle (
        id INTEGER PRIMARY KEY,
        titulo TEXT,
        descricao TEXT,
        valor_nota_orientador FLOAT NOT NULL,
        valor_nota_coordenador FLOAT NOT NULL,
        data_fechamento DATE NOT NULL
    );`);
}

function create_table() {
    // CRIAR TABELAS
    table_aluno();
    table_orientador();
    table_coordenador();
    table_admin();
    table_usuario();
    table_solicitacao();
    table_ponto_controle();
    table_pasta_ponto_controle();
}

create_table()
// export {create_table};