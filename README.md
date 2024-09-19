
# Criando uma Documentação de API's com Swagger

## Instalação de Pacotes:

```bash
npm i swagger-ui-express
```

## Configuração do Projeto

- index.js:

```javascript
const swaggerUI = require("swagger-ui-express");

&&

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')));
```

## Payload do Cabeçalho da documentação (swagger.json)

Neste payload, informaremos a versão da documentação  e metadados como, titulo, descrição e versão da documentação / projeto. Também informamos a seguir o path padrão para todas API's:

```json
{
    "openapi": "3.0.1",
    "info": {
        "title": "Alunos",
        "description": "Documentação sobre Aulos APIS",
        "version": "1.0.0"
    },
    "basePath": "/"
}
```

## Documentando a primeira rota:

Dentro da prop "path", iremos ter todos os paths configurados de nossas APIS, esse caso vamos começar com nosso primeiro path que é um get em ```/api/usuarios```:

```json
"paths": {
    "/api/usuarios" : {
        "get": {
            "parameters": {

            },
            "responses": {
                
            }
        }
    }
}
```

Podemos e iremos utilizar no próximo get configuração de parametros através da query parameters, nesse caso, usaremos a definição abaixo:

```json
    "parameters": {
        "in": "query",
        "name": "nome",
        "type": "string",
    }
```