# Documento de Plano de Teste

Autores: Álefe Lucas, Breno Aroeira Cosenza, Henrique Schiess Pertussati, Luana Duarte Santana Farias e Lucas de Souza Moraes.

## 1. Introdução

Este documento tem como objetivo indicar os testes para o projeto **Gerenciador de alocação de TCC's**, cada caso de teste conta com as colunas:

 *Ações de Entrada/Eventos*. Que por sua vez tem como objetivo indicar as ações e eventos tomadas por cada ator do caso de teste. Nesta coluna a onde a descrição indica que a ação ou entrada é realizada por certo ator. O testador deve estar utilizando uma conta do ator em questão. Exemplificando se o campo diz *"Aluno seleciona..."* o testador deverá estar em uma conta de aluno para a realização do teste. 

*Respostas Esperadas*. Que por sua vez tem como objetivo indicar as respostas esperadas do sistema em cada caso de teste. Indicando o que espera-se que o sistema realize em seu banco de dados ou em tela. Exemplificando caso o teste demanda a exibição de algo em tela este por sua vez deverá ser esperado neste campo, se o caso demanda alterações no banco de dados este deverá ser esperado neste campo. 

### 1.1. Acrônimos e abreviações.

Na ordem de aparição dos mesmos: 

| Acrônimo/Abreviação | Sinônimo                       |
| ------------------- | ------------------------------ |
| TCC                 | Trabalho de Conclusão de Curso |
| NA                  | Não Aplicável                  |



## 2. Casos de Testes Funcionais
### 2.1. Caso de Teste : Submeter Ponto de Controle

|                   Ações de Entrada/Eventos                   |                     Respostas Esperadas                      |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|              Aluno seleciona ponto de controle.              |       Abrir tela com o ponto de controle selecionado.        |
|       Aluno escreve a descrição do ponto de controle.        |                              NA                              |
| Aluno clica em submeter, e o ponto de controle é enviado ao sistema |    Recuperado pelo sistema os campos escritos pelo aluno.    |
|                              -                               | Ponto de controle é recebido pelo sistema e liberado para o orientador. |

### 2.2. Caso de Teste : Avaliar Ponto de Controle

| Ações de Entrada/Eventos |                     Respostas Esperadas                      |
|:-------------------:|:------------------------------:|
| Orientador seleciona qual ponto de controle gostaria de visualizar.  | Abrir tela com o ponto de controle selecionado. |
| NA |  Sistema carrega o ponto de controle e o mostra na tela, bem como os campos "Nota" e "Parecer"  para o orientador preencher. |
| Orientador escreve o parecer. | NA |
| Orientador atribui nota de orientador ao ponto de controle. | NA |
| Orientador clica no botão "submeter" após preencher os campos. | Recuperado pelo sistema os campos, nota de orientador e parecer. |
| NA | Verifica as informações escritas nos campos.  |
| NA |  Caso as informações estejam válidas, salva os dados no sistema e  encaminha para a coordenação. |
|        Orientador verifica as informações digitadas.         | Caso as informações estejam inválidas (nota maior que o máximo / campos vazios), uma mensagem é exibida ao orientador pedindo para verificar as informações. |

### 2.3. Caso de Teste 3
## 3. Casos de Testes Não Funcionais
### 3.1. Caso de Teste 1
### 3.2. Caso de Teste 2
### 3.3. Caso de Teste 3
