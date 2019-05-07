import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header'

class App extends Component {

    state = {
        tabela_ponto_controle_aluno: [
            {ponto_controle: 'Primeiro', data_fechamento: '99/99/99', nota_orientador: '10/10', nota_coordenador: '10/10', sub_total: '10/10'},
            {ponto_controle: 'Segundo', data_fechamento: '99/99/99', nota_orientador: '10/10', nota_coordenador: '10/10', sub_total: '10/10'},
            {ponto_controle: 'Terceiro', data_fechamento: '99/99/99', nota_orientador: '10/10', nota_coordenador: '10/10', sub_total: '10/10'},
            {ponto_controle: 'Quarto', data_fechamento: '99/99/99', nota_orientador: '10/10', nota_coordenador: '10/10', sub_total: '10/10'}
        ]
    };

    //Props que remove do characters
    removeCharacter = index => {
        const { tabela_ponto_controle_aluno } = this.state;
    
        this.setState({
            tabela_ponto_controle_aluno: tabela_ponto_controle_aluno.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    //Props que cuida do submit do formulário
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    //RENDERIZACAO
    render() {
        const { tabela_ponto_controle_aluno } = this.state;
        return (
            <div>
                <Header></Header>
                <h4>Notas</h4>
                <Table
                    tabela_ponto_controle_aluno={tabela_ponto_controle_aluno}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;