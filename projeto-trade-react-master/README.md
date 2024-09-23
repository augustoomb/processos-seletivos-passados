# Repositório React Sports - Teste técnico Front-end Trade

Projeto criado utilizando React, Javascript e Docker

## Uso

Você pode rodar o projeto utilizando apenas o npm normalmente ou via docker

### Via npm...

Entre no diretório do projeto e execute

### `npm install`

### `npm start`

Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação rodando no browser.

### Via docker...

Caso seja o primeiro uso, crie a imagem a partir do dockerfile fornecido

### `docker build -t img-projecto-trade-react .`

Caso o container já tenha sido criado mas estiver parado:

### `docker start container-projeto-trade-react`

Acesse o terminal do container em execução:

### `docker exec -it container-projeto-trade-react sh`

Caso seja o primeiro acesso ao container, instale as dependências:

### `npm i`

Rode a aplicação no terminal do container

### `npm start`

Acesse a aplicação pelo endereço mostrado

## Testes

Para rodar os testes, execute:

### `npm test`



## Bonus

Como a API tem limite de uso é altamente recomendável utilizar um mock. Pensando nisso, foi configurado um mock nesta aplicação, que se encontra em:

### `src/mock/mockApi.json`

Para utilizar é necessário alterar algumas linhas nos arquivos: src/pages/Login.jsx, src/pages/DataFilter.jsx, src/pages/TeamData.jsx. As linhas estão comentadas nos respectivos arquivos. Basta retirar o cometário das linhas e ativar as linhas correspondentes exatamente acima das linhas comentadas.

Além disso é necessário utilizar a biblioteca json-server; não é necessário instalá-la, visto que podemos rodar utilizando o npx:

### `npx json-server ./src/mock/mockApi.json --port 3001`

Feito isso, pode-se utilizar a vontade.

OBS1: Lembre de utilizar a aplicação no modo normal(sem mock) pelo menos uma vez
OBS2: Independente das escolhas feitas nas respectivas telas da aplicação, os dados selecionados serão sempre:
-> time: Flamengo
-> país: Brazil
-> competição: Serie A
-> temporada: 2022

Isso é necessário para termos um arquivo mock com um tamanho utilizável.
