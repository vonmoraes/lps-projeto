# Documento de Especificação de Requisitos. 

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
 ![alt text](https://drive.google.com/open?id=1M4eCieQlfqpjXT1MtpwcHDh0d303YuNP)

 **imagem**: *Diagrama de Casos de Uso*.

 ### 3.2. Descrição de Caso de Uso

## 4. Prototipagem

## 5. Diagramas de Classe de Análise
 ![alt text](https://drive.google.com/open?id=1UNhk2qChXrPykuuKf2oSZFaF2sEQyJ4o)

**imagem**: *Diagrama de Classe de Análise*.
