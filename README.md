
# API MVC com Node.js e MongoDB

Bem-vindo ao repositório da **API MVC com Node.js e MongoDB**\! Este projeto oferece uma API RESTful para gerenciar usuários, utilizando o padrão arquitetural Model-View-Controller (MVC) para uma organização de código robusta e escalável.

## 🚀 Visão Geral do Projeto

Esta API foi desenvolvida para servir como um backend eficiente para aplicações que necessitam de um sistema de gerenciamento de usuários. Ela expõe endpoints para operações CRUD (Create, Read, Update, Delete) de usuários, facilitando a integração com front-ends ou outros serviços.

## ✨ Tecnologias Utilizadas

  * **Node.js**: Plataforma de execução JavaScript assíncrona orientada a eventos.
  * **Express.js**: Framework web rápido e minimalista para Node.js, utilizado para construir a API.
  * **MongoDB**: Banco de dados NoSQL orientado a documentos, flexível e escalável.
  * **Mongoose**: ODM (Object Data Modeling) para MongoDB em Node.js, simplificando a interação com o banco de dados.
  * **`mongoose-sequence`**: Plugin Mongoose para gerar sequências de números automáticos (como IDs auto-incrementáveis).
  * **`body-parser`**: Middleware para Express.js que analisa dados de requisições recebidas.

## ⚙️ Instalação e Configuração

Para colocar o projeto em funcionamento na sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/api-mvc-node-mongodb.git # Substitua pelo link do seu repositório
    cd api-mvc-node-mongodb
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) (gerenciador de pacotes do Node.js) instalados em sua máquina. Em seguida, execute o comando para instalar todas as dependências do projeto:

    ```bash
    npm install
    ```

    *Obs: Os pacotes `mongoose`, `express`, `body-parser` e `mongoose-sequence` serão instalados automaticamente via `package.json`.*

3.  **Configuração do Banco de Dados:**
    Este projeto utiliza MongoDB. Certifique-se de ter uma instância do MongoDB em execução. Você pode rodar uma localmente ou usar um serviço de nuvem como MongoDB Atlas.

      * **Crie um arquivo `.env`** na raiz do projeto, com o seguinte conteúdo (substitua pelo seu URI do MongoDB):
        ```
        MONGODB_URI=mongodb://localhost:27017/nomeDoSeuBancoDeDados
        ```
        *Se você estiver usando o MongoDB Atlas ou outro serviço em nuvem, o `MONGODB_URI` será diferente.*

## ▶️ Como Iniciar o Serviço

Após a instalação das dependências e a configuração do banco de dados, você pode iniciar a API:

1.  Navegue até a pasta raiz do projeto.
2.  Execute o comando:
    ```bash
    node index.js
    ```
    Você verá uma mensagem no console indicando que a API está rodando, geralmente na porta 3000 (ou a porta configurada no seu projeto).

## 🌍 Endpoints da API

A API fornece os seguintes endpoints para gerenciar dados de usuários:

-----

### Métodos GET

  * **`GET /api/users`**

      * **Descrição:** Retorna uma lista de todos os usuários cadastrados.
      * **Exemplo de Resposta:**
        ```json
        [
            {
                "_id": "651a0b12c6a0b2e3f4g5h6i7",
                "clientId": 1,
                "name": "João Silva",
                "email": "joao.silva@example.com",
                "__v": 0
            },
            // ... outros usuários
        ]
        ```

  * **`GET /api/usercount`**

      * **Descrição:** Retorna o número total de usuários cadastrados no banco de dados.
      * **Exemplo de Resposta:**
        ```json
        {
            "count": 10
        }
        ```

  * **`GET /api/users/:clientId`**

      * **Descrição:** Recupera um usuário específico pelo seu `clientId` (ID gerado automaticamente pelo `mongoose-sequence`).
      * **Parâmetros de Rota:**
          * `:clientId` (obrigatório): O ID único do usuário.
      * **Exemplo de Resposta:**
        ```json
        {
            "_id": "651a0b12c6a0b2e3f4g5h6i7",
            "clientId": 1,
            "name": "João Silva",
            "email": "joao.silva@example.com",
            "__v": 0
        }
        ```
        *Se o usuário não for encontrado, retornará um erro 404.*

  * **`GET /api/username/:name`**

      * **Descrição:** Recupera um usuário pelo seu nome de usuário. A busca não faz distinção entre maiúsculas e minúsculas.
      * **Parâmetros de Rota:**
          * `:name` (obrigatório): O nome do usuário a ser buscado.
      * **Exemplo de Resposta:**
        ```json
        {
            "_id": "651a0b12c6a0b2e3f4g5h6i7",
            "clientId": 1,
            "name": "João Silva",
            "email": "joao.silva@example.com",
            "__v": 0
        }
        ```
        *Se o usuário não for encontrado, retornará um erro 404.*

-----

### Método POST

  * **`POST /api/users`**
      * **Descrição:** Cria um novo usuário no sistema.
      * **Corpo da Requisição (JSON):**
        ```json
        {
            "name": "Novo Usuário",
            "email": "novo.usuario@example.com",
            "password": "umaSenhaSegura"
        }
        ```
      * **Exemplo de Resposta (201 Created):**
        ```json
        {
            "_id": "651a0b12c6a0b2e3f4g5h6i8",
            "clientId": 2,
            "name": "Novo Usuário",
            "email": "novo.usuario@example.com",
            "__v": 0
        }
        ```

-----

### Método PUT

  * **`PUT /api/users/:clientId`**
      * **Descrição:** Atualiza os dados de um usuário existente, identificado pelo seu `clientId`.
      * **Parâmetros de Rota:**
          * `:clientId` (obrigatório): O ID único do usuário a ser atualizado.
      * **Corpo da Requisição (JSON):**
          * Forneça os campos que deseja atualizar. Por exemplo:
        <!-- end list -->
        ```json
        {
            "email": "novo.email@example.com"
        }
        ```
      * **Exemplo de Resposta (200 OK):**
        ```json
        {
            "_id": "651a0b12c6a0b2e3f4g5h6i7",
            "clientId": 1,
            "name": "João Silva",
            "email": "novo.email@example.com",
            "__v": 0
        }
        ```
        *Se o usuário não for encontrado, retornará um erro 404.*

-----

### Método DELETE

  * **`DELETE /api/users/:clientId`**
      * **Descrição:** Exclui um usuário do sistema, identificado pelo seu `clientId`.
      * **Parâmetros de Rota:**
          * `:clientId` (obrigatório): O ID único do usuário a ser excluído.
      * **Exemplo de Resposta (204 No Content):**
          * Em caso de sucesso, nenhuma resposta de corpo é retornada.
          * Se o usuário não for encontrado, retornará um erro 404.

-----

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas\! Se você tiver sugestões, encontrar bugs ou quiser adicionar novos recursos, por favor:

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit-as (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Envie para o repositório (`git push origin feature/sua-feature`).
5.  Abra um Pull Request, descrevendo suas mudanças.

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

-----

Este README expande significativamente o seu original, tornando-o muito mais útil para quem for usar ou contribuir com seu projeto. Se precisar de mais alguma seção ou detalhe, é só me dizer\!
