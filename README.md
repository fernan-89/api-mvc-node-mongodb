# api-mvc-node-mongodb
certificquesse de ter instlado na maquina os pacotes necessarios
> npm install mongos express body-parser mongoose-sequence <p>

Para inicar o serviço, navegue até a pasta do projeto e execute o comando

Endpoints da API
A API fornece os seguintes endpoints para gerenciar dados de usuários:
> npm init -y <p>
> node index.js

Métodos GET:

 > /api/users: Retorna uma lista de todos os usuários.<p>
   /api/usercount: Retorna o número total de usuários. <p>
   /api/users/:clientId: Recupera um usuário específico pelo seu ID. <p>
   /api/username/:name: Recupera um usuário pelo seu nome de usuário (sem distinção entre maiúsculas e minúsculas).<p>

Método POST:

> /api/users: Cria um novo usuário. O corpo da requisição deve conter os dados do usuário.

Método PUT:

> /api/users/:clientId: Atualiza os dados de um usuário existente. O corpo da requisição deve conter as informações atualizadas do usuário.

Método DELETE:

> /api/users/:clientId: Exclui um usuário pelo seu ID.
