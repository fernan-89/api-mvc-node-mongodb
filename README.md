# api-mvc-node-mongodb
Isso iniciará o servidor na porta 3000 por padrão.

Endpoints da API
A API fornece os seguintes endpoints para gerenciar dados de usuários:

Métodos GET:

    /api/users: Retorna uma lista de todos os usuários.
    /api/usercount: Retorna o número total de usuários.
    /api/users/:clientId: Recupera um usuário específico pelo seu ID.
    /api/username/:name: Recupera um usuário pelo seu nome de usuário (sem distinção entre maiúsculas e minúsculas).

Método POST:

#   /api/users: Cria um novo usuário. O corpo da requisição deve conter os dados do usuário.

Método PUT:

#   /api/users/:clientId: Atualiza os dados de um usuário existente. O corpo da requisição deve conter as informações atualizadas do usuário.

Método DELETE:

#   /api/users/:clientId: Exclui um usuário pelo seu ID.