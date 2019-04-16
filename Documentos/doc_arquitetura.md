
# Documento de Arquitetura de Software
Autores: Álefe Lucas, Breno Aroeira Cosenza, Henrique Schiess Pertussati, Luana Duarte Santana Farias e Lucas de Souza Moraes.
## 1. Introdução

Este documento fornece uma visão geral arquitetura abrangente do sistema, usando vários meios de arquitetura de software diferentes para representar diversos aspectos do sistema. Destina-se a capturar e transmitir as decisões arquiteturais significativas que foram tomadas no sistema. 

É de se notar que o sistema foi remodelado para a utilização de javaScript, como requisito não funcional de plataforma web. 

<div style="page-break-after: always;"/>

## 2. Diagramas de Interação



#### Caso de uso: Efetuar login.
![efetuar_login](https://user-images.githubusercontent.com/26805177/56161343-a5f13d00-5f9f-11e9-9f19-54e046b76512.png)
#### Caso de uso: Submeter ponto de controle.
![submeter_ponto_controle](https://user-images.githubusercontent.com/26805177/56160815-83125900-5f9e-11e9-903a-5858fdfe56aa.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Avaliar ponto de controle.
![avaliar_ponto_controle](https://user-images.githubusercontent.com/26805177/56160489-b0123c00-5f9d-11e9-87ba-5a0064cca490.png)
#### Caso de uso: Atribuir nota de coordenador. 
![atribuir_nota_coordenador](https://user-images.githubusercontent.com/26805177/56160792-768e0080-5f9e-11e9-93a9-6a9404d19f28.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Solicitar Orientador.
![solicitar_orientador](https://user-images.githubusercontent.com/26805177/56160515-bb656780-5f9d-11e9-87be-ca7a9bc78096.png)
#### Caso de uso: Aceitar solicitação de orientando.
![aceitar_solicitacao_orientando](https://user-images.githubusercontent.com/31371849/56175175-49584700-5fcc-11e9-95a2-12be7cb71b4b.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Aceitar solicitação de orientador.
![aceitar_solicitacao_orientador](https://user-images.githubusercontent.com/31371849/56172275-1c516780-5fbf-11e9-88d4-89b1e60bb3db.png)
#### Caso de uso: Aceitar solicitação de coordenador.
![aceitar_solicitacao_coordenador](https://user-images.githubusercontent.com/26805177/56161347-a8539700-5f9f-11e9-8036-17bfc32e4be9.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Visualizar/Alterar dados cadastrais.
![visualizar_alterar_dados_cadastrais](https://user-images.githubusercontent.com/31371849/56172643-c251a180-5fc0-11e9-8d6d-e54bf09dae58.png)
#### Caso de uso: Recuperar senha.
![recuperar_senha](https://user-images.githubusercontent.com/31371849/56172491-114b0700-5fc0-11e9-98b3-27882a46ada3.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Cadastrar-se.
![cadastrarse](https://user-images.githubusercontent.com/31371849/56172639-bf56b100-5fc0-11e9-8f6e-80e0c3c88966.png)

<div style="page-break-after: always;"/>

## 3. Diagramas de Componentes/Deployment



#### Caso de uso: Efetuar login.
![efetuar_login](https://user-images.githubusercontent.com/31371849/56172218-c8df1980-5fbe-11e9-999a-f143758b2fab.png)
#### Caso de uso: Submeter ponto de controle.
![submeter_ponto_controle](https://user-images.githubusercontent.com/26805177/56161074-0cc22680-5f9f-11e9-9d82-eb09bbb43298.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Avaliar ponto de controle.
![avaliar_ponto_controle](https://user-images.githubusercontent.com/31371849/56172090-4a827780-5fbe-11e9-9dcc-b16fc6e49100.png)
#### Caso de uso: Atribuir nota de coordenador. 
![atribuir_nota_coordenador](https://user-images.githubusercontent.com/26805177/56161046-02079180-5f9f-11e9-89a3-4e5f6aed57f5.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Solicitar Orientador.
![solicitar_orientador](https://user-images.githubusercontent.com/31371849/56172095-4e15fe80-5fbe-11e9-9683-c91ede6b6480.png)
#### Caso de uso: Aceitar solicitação de orientando.
![aceitar_solicitacao_orientando](https://user-images.githubusercontent.com/31371849/56175182-56753600-5fcc-11e9-85d8-b037c39c64aa.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Aceitar solicitação de orientador.
![aceitar_solicitacao_orientador](https://user-images.githubusercontent.com/31371849/56172235-dbf1e980-5fbe-11e9-8c26-8586a5195437.png)
#### Caso de uso: Aceitar solicitação de coordenador.
![aceitar_solicitacao_coordenador](https://user-images.githubusercontent.com/31371849/56172229-d4324500-5fbe-11e9-833e-67fc8acce7fe.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Visualizar/Alterar dados cadastrais.
![visualizar_alterar_dados_cadastrais](https://user-images.githubusercontent.com/31371849/56172599-93d3c680-5fc0-11e9-8a86-4a1f79e46e95.png)
#### Caso de uso: Recuperar senha.
![recuperar_senha](https://user-images.githubusercontent.com/31371849/56172499-1dcf5f80-5fc0-11e9-9fd4-5068eb9e9508.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Cadastrar-se.
![cadastrarse](https://user-images.githubusercontent.com/31371849/56172614-a5b56980-5fc0-11e9-9456-19ada3ddb1fd.png)


<div style="page-break-after: always;"/>

## 4. Diagrama de Entidade Relacionamento

![diagrama_er_entidade_relacionamento](https://user-images.githubusercontent.com/26805177/56163265-46496080-5fa4-11e9-9bc1-27588181547c.png)

<div style="page-break-after: always;"/>

## 5. Diagrama de Classes de Projeto



#### Caso de uso: Efetuar login.
![efetuar_login](https://user-images.githubusercontent.com/26805177/56161226-66c2ec00-5f9f-11e9-8fa3-22cc49b86ec7.png)
#### Caso de uso: Submeter ponto de controle.
![submeter_ponto_controle](https://user-images.githubusercontent.com/26805177/56160924-bd7bf600-5f9e-11e9-9ca1-5e5099ed3acd.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Avaliar ponto de controle.
![avaliar_ponto_controle](https://user-images.githubusercontent.com/26805177/56160617-01bac680-5f9e-11e9-9ee7-3043b6e33901.png)
#### Caso de uso: Atribuir nota de coordenador. 
![atribuir_nota_coordenador](https://user-images.githubusercontent.com/26805177/56160959-cc62a880-5f9e-11e9-8f5d-4234202ce8d7.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Solicitar Orientador.
![solicitar_orientador](https://user-images.githubusercontent.com/26805177/56160622-07b0a780-5f9e-11e9-9bda-1090fc8ea08d.png)
#### Caso de uso: Aceitar solicitação de orientando.
![aceitar_solicitacao_orientando](https://user-images.githubusercontent.com/31371849/56175153-36457700-5fcc-11e9-9385-df5c962e871f.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Aceitar solicitação de orientador.
![aceitar_solicitacao_orientador](https://user-images.githubusercontent.com/31371849/56172288-2e330a80-5fbf-11e9-9e3f-b28b82dc8acd.png)
#### Caso de uso: Aceitar solicitação de coordenador.
![aceitar_solicitacao_coordenador](https://user-images.githubusercontent.com/26805177/56161237-6cb8cd00-5f9f-11e9-88ab-e51cedd8750e.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Visualizar/Alterar dados cadastrais.
![visualizar_alterar_dados_cadastrais](https://user-images.githubusercontent.com/31371849/56172679-f0cf7c80-5fc0-11e9-99b2-1d5d4c3f97e4.png)
#### Caso de uso: Recuperar senha.
![recuperar_senha](https://user-images.githubusercontent.com/31371849/56172474-04c6ae80-5fc0-11e9-9b9c-ca655c8da774.png)

<div style="page-break-after: always;"/>

#### Caso de uso: Cadastrar-se.
![cadastrarse](https://user-images.githubusercontent.com/31371849/56172669-e614e780-5fc0-11e9-97c2-af3b749474e2.png)



