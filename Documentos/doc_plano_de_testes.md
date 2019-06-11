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

<div style="page-break-after: always;"/>

## 2. Casos de Testes Funcionais
### 2.1. Caso de Teste : Submeter Ponto de Controle

|                   Ações de Entrada/Eventos                   |                     Respostas Esperadas                      |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|              Aluno seleciona ponto de controle.              |       Abrir tela com o ponto de controle selecionado.        |
|       Aluno escreve a descrição do ponto de controle.        |                              NA                              |
| Aluno clica em submeter, e o ponto de controle é enviado ao sistema. |    Recuperado pelo sistema os campos escritos pelo aluno.    |
|                              -                               | Ponto de controle é recebido pelo sistema e liberado para o orientador. |

### 2.2. Caso de Teste : Solicitar Orientador

| Ações de Entrada/Eventos                                     | Respostas Esperadas                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Aluno clica em incluir orientador.                           | Exibir Lista de orientadores.                                |
| 1- Aluno seleciona orientador da lista. <br>2- Aluno clica em solicitar. | Enviar solicitação de orientador ao orientador selecionado e exibir "solicitação enviada". |

<div style="page-break-after: always;"/>

### 2.3. Caso de Teste : Atribuir nota de coordenador

| Ações de Entrada/Eventos                                     | Respostas Esperadas                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Coordenador seleciona ponto de controle.                     | Abrir tela com o ponto de controle selecionado e lista de alunos que o enviaram. |
| Coordenador seleciona o aluno na lista de aluno.             | Exibir o ponto de controle desse aluno.                      |
| 1- Coordenador digita a nota do aluno <br> 2- Coordenador clica em submeter. | Atribuir a nota digitada ao ponto de controle do aluno selecionado. |

### 2.4. Caso de Teste : Aceitar solicitação de orientando.

| Ações de Entrada/Eventos                                | Respostas Esperadas                                          |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| Orientador clica na lista de requisições de orientando. | Exibir Lista de requisições.                                 |
| Seleciona requição da lista                             | Exibe detalhes da requisição, bem como as opções de aceitar ou recusar |
| Orientador aceita ou rejeita requsição                  | Opção é salva no sistema, criando o vínculo caso necessário, e mandando mensagem para os envolvidos informando da decisão tomada |

<div style="page-break-after: always;"/>

### 2.5. Caso de Teste : Aceitar solicitação de orientador.

| Ações de Entrada/Eventos                                   | Respostas Esperadas                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| Coordenador clica na lista de requisições dos orientadores | Exibir Lista de requisições.                                 |
| Seleciona requição da lista                                | Exibe detalhes da requisição, bem como as opções de aceitar ou recusar |
| Coordenador aceita ou rejeita requisição                   | Informação é salva no sistema, mandando mensagem para os envolvidos informando da decisão tomada. |

### 2.6. Caso de Teste : Recuperar Senha

| Ações de Entrada/Eventos                  | Respostas Esperadas                                          |
| ----------------------------------------- | ------------------------------------------------------------ |
| Usuário clica na opção de recuperar senha | Sistema mostra mensagem pedindo para usuário informar seu endereço de e-mail, com respectivo campo para preenchimento |
| Usuário digita seu endereço de e-mail     | Caso e-mail seja válido, sistema envia uma mensagem para o para e-mail, informando a senha associada àquele e-mail.<br>Caso contrário, sistema mostra uma mensagem falando que o e-mail é inválido, dando uma nova tentativa ao usuário. |

<div style="page-break-after: always;"/>

### 2.7. Caso de Teste : Efetuar Login

| Ações de Entrada/Eventos                                     | Respostas Esperadas                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Usuário entra com os dados (número de matrícula ou e-mail e senha). | NA                                                           |
| Usuário clica em entrar                                      | A conta do usuário é verificada:  1 - Caso Usuário válido, libera o acesso ao sistema.  2 - Caso Usuário Aluno sem Orientador, é exibida em tela seu perfil para a seleção de um orientador.  3 - Caso Usuário Aluno com Orientador, é liberado acesso ao sistema.  4 - Caso Usuário inválido, não libera o acesso ao sistema e sugere que o o usuário faça seu cadastro. |

### 2.8. Caso de Teste : Avaliar Ponto de Controle

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

<div style="page-break-after: always;"/>

### 2.9. Caso de Teste : Aceitar solicitação de coordenador

| Ações de Entrada/Eventos                        | Respostas Esperadas                                          |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Admin clica em vizualizar lista de solicitações | Lista de solicitações de admin é exibida.                    |
| Admin aceita/recusa a solicitação               | 1 - Caso solicitação aceita, sistema atualiza solicitação como aceita  2 - Caso solicitação recusada, sistema atualiza solicitação como recusada |

### 2.10. Caso de Teste : Visualizar/Alterar dados cadastrais

| Ações de Entrada/Eventos                        | Respostas Esperadas                                          |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Usuário clica em visualizar dados               | 1 - Verifica se usuário é aluno, orientador ou coordenador. <br>2 - Apresenta as informações respectivas ao tipo de usuário. |
| Usuário clica em editar                         | Mostra campos dos quais podem ser editados pelo tipo do usuário em questão. |
| Usuário preenche os campos e clica em confirmar | Informações preenchidas são alteradas no banco de dados      |

### 2.11. Caso de Teste : Cadastrar-se

| Ações de Entrada/Eventos                                     | Respostas Esperadas                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Usuário clica em cadastrar-se                                | Tela com campos cadastrais a serem preenchidos é apresentada |
| Usuário preenche campos e decide se deseja ser cadastrado como aluno ou orientador | Caso seja selecionado aluno, é enviado uma confirmação de e-mail para o mesmo, caso seja registrado como orientador, é enviado uma confirmação para o coordenador |