# Documento de Especificação de Requisitos. 
Autores: Álefe Lucas, Breno Aroeira Cosenza, Henrique Schiess Pertussati, Luana Duarte Santana Farias e Lucas de Souza Moraes.
## 1. Introdução

Este documento tem como objetivo a definição de requisitos para o projeto de **Gerenciador de alocação de TCC’s** para os alunos e orientadores acadêmicos. Além de permitir a submissão dos pontos de controle durante o semestre, o sistema deve permitir armazenamento da nota dos alunos atribuídas pelo o orientador e coordenador. 

O documento incluí o *levantamento de requisitos* realizado pela equipe, o *diagrama de casos de uso* realizado em base dos requisitos bem como suas *descrições*, o *protótipo* da plataforma bem como seu *diagrama de classe de análise*. Na ordem respectivamente. 

As siglas e abreviações utilizadas neste documento referem-se : 
* TCC - Trabalho de Conclusão de Curso
* JSP - Java Server Pages
* JSF - Java Server Faces

Foi utilizado documentos de referência, [Ponto de Controle](https://github.com/vonmoraes/lps-projeto/blob/master/Documentos/Referencias/1505831_Ponto%20de%20Controle%20CC%20201901.pdf) e [Regulamento para o trabalho de conclusão de curso](https://github.com/vonmoraes/lps-projeto/blob/master/Documentos/Referencias/1507899_Regulamento%20CC%20TCCI%202019%2001.pdf) adquiridos com a autorização de professores. 

## 2. Requisitos
 ### 2.1. Requisitos Funcionais
 - O sistema deve manter cadastro de Aluno. 
 - O sistema deve manter cadastro de Orientador.
 - O sistema deve manter cadastro de Coordenador.
 - O sistema deve manter cadastro de Administrador.
 - O sistema deve permitir a submissão de pontos de controle pelo Aluno, os pontos de controle são uma descrição textual sobre o que foi feito de trabalho até este ponto de controle e do que será feito até o próximo ponto de controle.
 - O sistema deve permitir a alteração de nota dos pontos de controle (Orientador e Coordenador).
 - O sistema deve permitir um parecer feito do orientador para o coordenador na submissão dos pontos de controle.
 - O sistema deve permitir que o Orientador encaminhe o ponto de controle pro Coordenador. 
 - O sistema deve permitir login por meio de matrícula e senha.
 - O sistema deve permitir o login de alunos, professores e coordenadores.
 - O sistema deve manter o registro de e-mail, senha e matricula do aluno, orientador e coordenador.
 - O sistema deve obter o e-mail do usuário através de seu número de matrícula.
 - O sistema deve exigir confirmação do e-mail após o registro do usuário para liberar o acesso.
 - O sistema deve permitir que durante o registro, o usuário informe seu tipo (aluno, coordenador, orientador). Quando informado   orientador, o coordenador receberá a solicitação para confirmá-lo. Quando informado coordenador, o administrador receberá solicitação  para confirmá-lo.
 - O sistema deve permitir com que o aluno selecione ou altere seu orientador. Após a seleção é gerada uma solicitação que o orientador selecionado deverá aceitar.
 - O sistema deve permitir que os usuários alterem seus dados.
 - O sistema deve permitir que os usuários recuperem senha perdida.
 - O sistema deve possuir um usuário administrador padrão.
 ### 2.2. Requisistos Não Funcionais
  - O sistema será em plataforma web.
  - O sistema usará JSP.
  - O sistema usará JSF.
  - O sistema usará MySQL. 
  
## 3. Casos de Uso
 ### 3.1. Diagrama
 ![diagrama_de_caso_uso](https://user-images.githubusercontent.com/31371849/54547085-d2577080-4983-11e9-91dd-8866e029591c.png)

 **imagem**: *Diagrama de Casos de Uso*.

 ### 3.2. Descrição de Caso de Uso
 
#### Caso de Uso: _Submeter ponto de controle_.

**Atores**: Aluno.  
**Visão geral**: O aluno preenche o ponto de controle e o submete para avaliação.  
**Pré-requisitos**: Aluno cadastrado.  
**Pós-requisitos**: Ponto de controle submetido para o parecer do orientador.  

**Fluxo de eventos**:  

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Aluno seleciona data de fechamento do ponto de controle.  | |
| 2 - Aluno escreve a descrição do ponto de controle. | |
| 3 - Aluno clica em submeter, e o ponto de controle é enviado ao sistema | |
| | 4 - Ponto de controle é recebido pelo sistema e liberado para o orientador. |

#### Caso de Uso: _Efetuar login._
**Atores**: Usuário. </br>
**Visão geral**: Usuário cadastrado efetua login de acesso ao sistema. </br>
**Pré-requisitos**: Usuário estar cadastrado.  </br>
**Pós-requisitos**:  Usuário logado no sistema. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário digita número de matrícula ou e-mail e senha. | |
| 2 - Usuário clica em entrar. | |
| | 3 - Verifica a conta do usuário. |
| | 3.1 - Usuário válido, libera o acesso ao sistema.
| | 3.1.1 - Usuário Aluno sem Orientador, é exibida em tela seu perfil para a seleção de um orientador. |
| | 3.1.2 - Usuário Aluno com Orientador, é liberado acesso ao sistema.
| | 3.2 - Usuário inválido, não libera o acesso ao sistema e sugere que o o usuário faça seu cadastro. |

**Fluxo alternativo**: 1

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário clica em esqueceu a senha.| |
| 2 - Usuário digita número de matrícula ou e-mail. | |
| | 3 - Sistema envia e-mail com instruções de recuperação de senha. |

**Fluxo alternativo**: 2

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário clica em novo.| |
|  | 2 - Solicita o cadastro do usuário. |

#### Caso de Uso: _Avaliar ponto de controle._
**Atores**:  Orientador. </br>
**Visão geral**:  Orientador visualiza e avalia o ponto de controle de seu orientando. </br>
**Pré-requisitos**:  Orientador precisa estar logado no sistema. </br>
**Pós-requisitos**:  Informações são salvas no sistema e ficam disponíveis para orientador, coordenador e aluno correspondente. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Orientador seleciona qual ponto de controle gostaria de visualizar.  | |
| |  2 - Sistema carrega o ponto de controle e o mostra na tela, bem como os campos "Nota" e "Parecer"  para o orientador preencher. |
| 3 - Orientador escreve o parecer.| |
| 4 - Orientador atribui nota de orientador ao ponto de controle. | |
| 5 - Orientador clica no botão "submeter" após preencher os campos. | |
|  | 6 - Verifica as informações escritas nos campos.  |
|  |  6.1 - Caso as informações estejam válidas, salva os dados no sistema e  encaminha para a coordenação. |
|  | 6.2 - Caso as informações estejam inválidas (nota maior que o máximo / campos vazios), uma mensagem é exibida ao usuário pedindo para verificar as informações. |

#### Caso de Uso: _Atribuir nota de coordenador._
**Atores**: Coordenador. </br>
**Visão geral**: Coordenador visualiza um ponto de controle avaliado por um orientador. Após isso atribui sua nota ao ponto de controle do aluno.  </br>
**Pré-requisitos**:  Coordenador estar cadastrado, parecer do ponto de controle submetido.  </br>
**Pós-requisitos**: Nota de coordenador no ponto de controle alterada. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Seleciona ponto de controle a ser avaliado.  | |
| |  2 - Retorna ponto de controle escolhido. |
| 3 - Atribui nota ao ponto de controle. | |
| | 4 - Atualiza a nota de coordenador ao ponto de controle. |

#### Caso de Uso: _Cadastrar-se_
**Atores**: Usuário. </br>
**Visão geral**: Cadastra um novo usuário ao sistema. </br>
**Pré-requisitos**: - </br>
**Pós-requisitos**: Usuário cadastrado. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário clica em cadastro. | |
| |  2 - Exibe tela de cadastro.|
| 3 - Usuário digita número de matrícula, e-mail e senha para cadastro. | |
| 4 - Usuário especifica o seu tipo de usuário, se ele é Aluno, Orientador ou Coordenador. | |
| 5 - Usuário clica na submissão de seus dados. | |
| | 6 - Sistema verifica as informações do usuário. |
| | 7. Exibe em tela mensagem "E-mail enviado para conclusão de cadastro!" |
| | 8. Salva informações do usuário. | 

#### Caso de Uso: _Recuperar senha._
**Atores**: Usuário. </br>
**Visão geral**: Usuário recebe e-mail com sua senha. </br>
**Pré-requisitos**: Usuário deve estar cadastrado no sistema. </br>
**Pós-requisitos**: E-mail com senha enviada para o usuário. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário clica na opção de recuperar senha.  | |
|                              |  2 - Sistema mostra mensagem pedindo para usuário informar seu endereço de e-mail. |
| 3 - Usuário informa endereço de e-mail solicitado.  | |
|   | 4 - Sistema verifica endereço de e-mail informado.|
|   | 4.1 - Caso e-mail esteja cadastrado, sistema envia uma mensagem para o e-mail do usuário com sua senha.|
|   | 4.2 - Caso e-mail não esteja cadastrado, sistema mostra uma mensagem para o usuário e sugere tentar novamente.|

#### Caso de Uso: _Visualizar/Alterar dados cadastrais._
**Atores**: Usuário. </br>
**Visão geral**: Usuário edita e altera seus dados cadastrais. </br>
**Pré-requisitos**:  Usuário deve cadastrado no sistema. </br>
**Pós-requisitos**:  Informações cadastrais são atualizadas no sistema. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Usuário Visualizar perfil.| |
|  2 - Usuário seleciona a opção de "Atualizar dados".                           |  |
|  | 3 - Sistema abre página com os campos possíveis de serem editados pelo usuário, já com a informação atual escrita. |
| 4 - Usuário altera os campos que deseja e clica no botão "Confirmar alterações".  |  |
|  | 5 - Sistema pede confirmação do usuário para salvar as alterações, através da escolha dentre dois botões "Sim" ou "Não". |
| 6 - Usuário escolhe "Sim". | |
| | 7 - Sistema verifica os dados. |
| | 7.1 - Se a verificação não apontou nada errado, sistema salva os dados e mostra uma mensagem de "Alteração realizada com sucesso". |
| | 7.2 - Se a verificação apontou erros (campo obrigatório em branco, _time_out_, etc), sistema exibe a mensagem com o erro e volta para a página anterior, sem alterar nenhum dado|

**Fluxo alternativo**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
|  6 - Usuário escolhe "Não". | |
|  | 7 - Sistema sai da página de atualização de dados sem salvar nenhuma alteração. |

#### Caso de Uso: _Solicitar Orientador._
**Atores**: Aluno. </br>
**Visão geral**: Aluno seleciona seu orientador.  </br>
**Pré-requisitos**: Aluno cadastrado e efetivado. </br>
**Pós-requisitos**: Aluno com orientador.  </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Seleciona incluir ou alterar seu orientador.  | |
| |  2 - Exibe lista de orientadores. |
| 3 - Seleciona um orientador da lista. | |
| | 4 - Envia solicitação de orientador, ao orientador. |

#### Caso de Uso: _Aceitar solicitação de orientando._
**Atores**: Orientador. </br>
**Visão geral**: Orientador aceita solicitações de orientandos.  </br>
**Pré-requisitos**: Orientador registrado, orientandos solicitando o orientador.  </br>
**Pós-requisitos**: Orientando aceito ou negado. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do orientador. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção aceitar solicitação. | |
| | 5 - Sistema atualiza solicitação como aceita. | 

**Fluxo alternativo**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do orientador. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção negar solicitação. | |
| | 5 - Sistema atualiza solicitação como negada. | 

#### Caso de Uso: _Aceitar solicitação de orientador._
**Atores**: Coordenador. </br>
**Visão geral**: Coordenador aceita solicitações de orientadores.  </br>
**Pré-requisitos**: Coordenador registrado, orientador solicitando o coordenador. </br> 
**Pós-requisitos**: Orientador aceito ou negado. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do coordenador. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção aceitar solicitação. | |
| | 5 - Sistema atualiza solicitação como aceita. | 

**Fluxo alternativo**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do coordenador. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção negar solicitação. | |
| | 5 - Sistema atualiza solicitação como negada. | 

#### Caso de Uso: _Aceitar solicitação de coordenador._
**Atores**: Admin. </br>
**Visão geral**: Admin aceita solicitações de coordenadores.  </br>
**Pré-requisitos**: Orientador solicitando o seu registro.  </br>
**Pós-requisitos**: Orientador aceito ou negado. </br>

**Fluxo de eventos**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do admin. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção aceitar solicitação. | |
| | 5 - Sistema atualiza solicitação como aceita. | 

**Fluxo alternativo**:

| Ações do Ator | Respostas do Sistema |
|:-------------------:|:------------------------------:|
| 1 - Clica em visualizar lista de solicitações. | |
| |  2 - Exibe lista de solicitações do admin. |
| 3 - Seleciona a solicitação.  | | 
| 4 - Seleciona opção negar solicitação. | |
| | 5 - Sistema atualiza solicitação como negada. | 

## 4. Prototipagem
**Imagem**: *Tela de login.*
![1 1-Screen 1](https://user-images.githubusercontent.com/31371849/54569530-fc2b8a00-49b9-11e9-83fa-2b88ff9c3556.png)
**Imagem**: *Tela inicial de aluno.*
![2 1-Screen 2](https://user-images.githubusercontent.com/31371849/54569542-05b4f200-49ba-11e9-9798-d63c5446e3ed.png)
**Imagem**: *Tela de submeter ponto de controle (aluno).*
![3 1-Screen 3](https://user-images.githubusercontent.com/31371849/54569556-0f3e5a00-49ba-11e9-809b-89a90a7d1255.png)
**Imagem**: Tela de avaliar ponto de controle (orientador).*
![4 1-Screen 4](https://user-images.githubusercontent.com/31371849/54569567-15ccd180-49ba-11e9-8427-77ecf22057d1.png)
**Imagem**: Tela de atribuir nota de coordenador.
![5 1-Screen 5](https://user-images.githubusercontent.com/31371849/54569575-1f563980-49ba-11e9-8ba1-e9d302ea80b4.png)
**Imagem**: Tela inicial de orientador.
![6 1-Screen  7](https://user-images.githubusercontent.com/31371849/54569590-3137dc80-49ba-11e9-8c6e-e69e23bd7d09.png)
**Imagem**: Tela inicial de coordenador.
![7 1-Screen  8](https://user-images.githubusercontent.com/31371849/54569596-385eea80-49ba-11e9-9430-37331f4682bb.png)
**Imagem**: Tela inicial de administrador.
![8 1-Screen  9](https://user-images.githubusercontent.com/31371849/54569609-4876ca00-49ba-11e9-9e0d-ad98038f9573.png)
**Imagem**: Tela de recuperar senha.
![9 1-Screen 10](https://user-images.githubusercontent.com/31371849/54569615-50366e80-49ba-11e9-9a61-f429a21347a5.png)
**Imagem**: Tela de minha conta (aluno).
![10 1-Screen 11](https://user-images.githubusercontent.com/31371849/54569628-56c4e600-49ba-11e9-9acc-c19cae1be8fc.png)
**Imagem**: Tela de minha conta (coordenador e orientador).
![11 1-Screen  12](https://user-images.githubusercontent.com/43856911/54569798-fa15fb00-49ba-11e9-954c-0f10ddd3934d.png)


## 5. Diagramas de Classe de Análise
![diagrama_classe_analise](https://user-images.githubusercontent.com/31371849/54547184-0337a580-4984-11e9-9948-aaa9aba6fb78.png)

**imagem**: *Diagrama de Classe de Análise

---
[PDF](https://github.com/vonmoraes/lps-projeto/blob/master/Documentos/PDF/Documento%20de%20Especifica%C3%A7%C3%A3o%20de%20Requisitos.pdf), criado com [dillinger.io](https://dillinger.io/)
