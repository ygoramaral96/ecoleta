<h1 align="center">
    <img src="web/src/assets/logo.svg">
<h1>

# Índice
- [Índice](#índice)
- [Sobre](#sobre)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Conhecimentos adquiridos](#conhecimentos-adquiridos)
- [Como baixar o projeto](#como-baixar-o-projeto)
  - [Iniciando a API](#iniciando-a-api)
  - [Iniciando a aplicação Web](#iniciando-a-aplicação-web)
  - [Iniciando a aplicação Mobile](#iniciando-a-aplicação-mobile)

---

# Sobre
Projeto da Next Level Week #1 realizada pela [Rockeseat](https://rocketseat.com.br/).

Ecoleta é um marketplace de coleta de resíduos. 

Através da interface web é possível realizar o cadastro de pontos de coleta, possuindo um dropzone para upload de imagens e um mapa para cadastrar a geolocalização do ponto de coleta.

O back-end serve de comunicação com a aplicação web e mobile.

Com o aplicativo mobile, o usuário filtra os pontos de coleta através da seleção de uma cidade. 
Logo depois ele é direcionado a uma página com um mapa contendo os pontos de coleta daquele local, possibilitando também a seleção de filtros de cada resíduo.

O visual do projeto tem como base o template fornecido pela Rocketseat: https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta

<p align="center">
    <h3 align="center"> Aplicação Web </h3>
    <img src="web.png" />
    <h3 align="center"> Aplicação Mobile </h3>
    <img src="mobile.jpeg" />
</p>

---

# Tecnologias utilizadas

- React.js
- Dropzone
- Leaflet
- React Icons
- TypeScript
- Node.js
- Express
- Multer
- Cors
- TypeScript
- Knex.js
- Insomnia
  
---

# Conhecimentos adquiridos

- Criação de aplicações com React e React Native utilizando Typescript
- Utilização do [Expo](https://expo.io/) para criar o aplicativo mobile
- Upload de imagens com [react-dropzone](https://github.com/react-dropzone/react-dropzone)
- Geolocalização com o [Leaflet](https://leafletjs.com/)
- [Knex](http://knexjs.org/) migrations e seeds
- Utilização do [Multer](https://www.npmjs.com/package/multer)
- Validação de dados submetidos no back-end com [Celebrate](https://github.com/arb/celebrate)
  
---

# Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/ygoramaral96/ecoleta

    # Entrar no diretório baixado
    $ cd ecoleta

```

## Iniciando a API

```bash

    # Entrar no diretório do server
    $ cd server

    # Instalar as dependências
    $ npm install

    # Criar o banco de dados
    $ npm run knex:migrate

    # Inserir dados necessários no banco de dados
    $ npm run knex:seed

    # Por fim inicializar o servidor
    $ npm run dev

```

## Iniciando a aplicação Web

```bash

    # Entrar no diretório da aplicação web
    $ cd web

    # Instalar as dependências
    $ npm install

    # Inicializar o servidor
    $ npm start

```

## Iniciando a aplicação Mobile

```bash

    # Entrar no diretório da aplicação mobile
    $ cd mopbile

    # Instalar as dependências
    $ npm install

    # Inicializar o servidor
    $ npm start

```