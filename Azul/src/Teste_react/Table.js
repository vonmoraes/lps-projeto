import React, { Component } from 'react'


// Constante: Header da tabela de notas
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Ponto de controle</th>
          <th>Data de fechamento</th>
          <th>Nota orientador</th>
          <th>Nota coordenador</th>
          <th>Sub-total</th>
        </tr>
      </thead>
    );
}

// Body: Corpo da tabela de notas
const TableBody = props => {
    const rows = props.tabela_ponto_controle_aluno.map((row, index) => {
      return (
        <tr key={index}>
            <td>{row.ponto_controle}</td>
            <td>{row.data_fechamento}</td>
            <td>{row.nota_orientador}</td>
            <td>{row.nota_coordenador}</td>
            <td>{row.sub_total}</td>

            <td>
                <button class="waves-effect waves-light btn" onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
      )
    })  
    return <tbody>{rows}</tbody>
}
/** SOMENTE COMO COLOCAR O BOTAO
 *  <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
    </td>

    <TableBody 
        tabela_ponto_controle_aluno={tabela_ponto_controle_aluno} 
        removeCharacter={removeCharacter}
    />
 */


// Classe tabela_notas_aluno
class Table extends Component {
    
    //Renderização
    render() {
      // Var da classe
      const { tabela_ponto_controle_aluno, removeCharacter} = this.props
  
      return (
        <table class="striped">
          <TableHeader />
          <TableBody 
            tabela_ponto_controle_aluno={tabela_ponto_controle_aluno}
            removeCharacter={removeCharacter}
          />
        </table>
      )
    }
}

export default Table