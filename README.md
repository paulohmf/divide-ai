# Divide Aí - Ferramenta de Divisão de Conta de Bar

Esta aplicação foi criada para facilitar a divisão de despesas após um encontro no bar entre amigos. Com a ajuda desta ferramenta, você e seus amigos podem facilmente calcular quem deve quanto e garantir uma divisão justa da conta.

## Membros da Equipe

- *Gabriela Paixão* - Desenvolvedor Full Stack
- *Luis Henrique Soares Monteiro* - Desenvolvedor Full Stack
- *Paulo Henrique Maciel Fraga* - Desenvolvedor Backend
- *Rafael Nascimento* - Desenvolvedor Full Stack

## Escopo do Sistema

A Ferramenta de Divisão de Conta de Bar possui as seguintes funcionalidades:

- *Cadastro de Despesas:* Os usuários podem inserir as despesas feitas durante o encontro no bar, incluindo os itens pedidos e seus respectivos valores.

- *Seleção de Participantes:* Os usuários podem selecionar quais amigos participaram do encontro e compartilharam as despesas.

- *Cálculo de Divisão:* Com base nas despesas registradas e nos participantes selecionados, a ferramenta calcula automaticamente quanto cada pessoa deve pagar ou receber para equilibrar as contas.

- *Geração de Relatório:* A aplicação gera um relatório detalhado mostrando como as despesas foram divididas entre os participantes, simplificando o processo de pagamento.

## Tecnologias Utilizadas

- *PostgreSQL:* Utilizamos o PostgreSQL como nosso banco de dados relacional para armazenar informações sobre despesas, participantes e cálculos de divisão.

- *Node.js:* O Back-End da aplicação é desenvolvido em Node.js. Ele lida com a lógica de negócios, processamento de dados e interação com o banco de dados.

- *React:* A parte Front-End da aplicação é construída em React, permitindo uma interface de usuário interativa e amigável para inserção de despesas, seleção de participantes e visualização de relatórios.


---

Esperamos que nossa Ferramenta de Divisão de Conta de Bar seja útil e facilite suas experiências nos encontros com amigos. Divirta-se e beba com responsabilidade! 🍻

## Backlog do Produto 

1. Como usuário, eu gostaria de cadastrar uma despesa no Divide Ai para registrar quem pagou e o valor gasto.

2. Como usuário, eu gostaria de alterar uma despesa existente no Divide Ai, caso tenha cometido um erro ao registrá-la ou se os detalhes mudarem.

3. Como usuário, eu gostaria de simplificar uma despesa no Divide Ai, permitindo que o aplicativo calcule automaticamente as partes de cada pessoa com base nas configurações de divisão pré-definidas.

4. Como usuário, eu gostaria de adicionar uma nota ou descrição a uma despesa no Divide Ai para fornecer informações adicionais sobre o que foi gasto.

5. Como usuário, eu gostaria de dividir uma despesa igualmente entre todas as pessoas do grupo no Divide Ai, independentemente de quem pagou.

6. Como usuário, eu gostaria de dividir uma despesa de forma personalizada no Divide Ai, especificando diferentes percentagens de contribuição para cada pessoa.

7. Como usuário, eu gostaria de categorizar despesas no Divide Ai, como alimentação, transporte ou entretenimento, para melhor organizar meus gastos.

8. Como usuário, eu gostaria de ver um resumo das minhas despesas no Divide Ai, incluindo o total gasto e o valor que cada pessoa pagou ou está devendo.

9. Como usuário, eu gostaria de adicionar despesas em várias moedas no Divide Ai e que o aplicativo faça a conversão automática com taxas de câmbio atualizadas.

10. Como usuário, eu gostaria de definir um lembrete no Divide Ai para receber notificações quando for a hora de pagar ou lembrar outras pessoas do grupo.

11. Como usuário, eu gostaria de exportar relatórios ou extratos das despesas registradas no Divide Ai para fins de controle financeiro.

12. Como usuário, eu gostaria de ter a opção de arquivar despesas antigas no Divide Ai para manter a lista de despesas atualizada e organizada.

13. Como usuário, eu gostaria de realizar o login.

14. Como usuário, eu gostaria de marcar despesas como "liquidadas" no Divide Ai para indicar que uma dívida foi paga, mantendo um histórico claro de transações.

15. Como usuário, eu gostaria de convidar novas pessoas para se juntarem a um grupo no Divide Ai, facilitando a adição de novos membros em despesas compartilhadas.

16. Como usuário, se uma conta já foi paga, eu gostaria de colocar o valor da despesa, adicionar pessoas para a divisão da conta e o Divide Ai mostrar quanto cada pessoa deve pagar para quem quitou a conta no bar.

## Backlog do Sprint 

- *História #1:* Como usuário, eu gostaria de cadastrar uma despesa no Divide Ai
- *Tarefas e responsáveis:*
Implementar tela de cadastro [Gabriela]
Adaptar tela principal para incluir opção de editar despesas [Luis]
Implementar no backend a lógica de cadastro e edição de despesas [Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Rafael]

- *História #2:* Como usuário, eu gostaria de criar um grupo para divisão de despesas no Divide Ai
- *Tarefas e responsáveis:*
Implementar tela de criação de grupo [Luis]
Adaptar tela principal para incluir opção de editar informações do grupo e opção de exclusão do grupo [Rafael]
Implementar no backend a lógica de cadastro e edição do grupo[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]

- *História #3:*  Como usuário, eu gostaria de convidar novas pessoas para se juntarem a um grupo no Divide Ai
- *Tarefas e responsáveis:*
Implementar tela de adição de pessoas no grupo [Rafael]
Adaptar tela principal para incluir opção de retirar pessoas do grupo [Luis]
Implementar no backend a lógica de cadastro e edição de pessoas ao grupo[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]


- *História #4:* Como usuário, eu gostaria de dividir uma despesa de forma personalizada no Divide Ai, especificando diferentes percentagens de contribuição para cada pessoa.
- *Tarefas e responsáveis:*
Implementar tela de edição de despesas no grupo [Rafael]
Adaptar tela principal para incluir opção de editar percentual para cada integrante do grupo [Luis]
Implementar no backend a lógica de inclusão de percentual a pagar para cada integrante do grupo[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]

- *História #5:* Como usuário, eu gostaria de categorizar despesas no Divide Ai, como alimentação, transporte ou entretenimento, para melhor organizar meus gastos
- *Tarefas e responsáveis:*
Implementar tela de edição de tipo despesas no grupo [Rafael]
Adaptar tela principal para incluir opção de cadastrar e editar tipos de despesas [Luis]
Implementar no backend a lógica de inclusão de tipo de despesas[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]

- *História #6:* Como usuário, eu gostaria de marcar despesas como "liquidadas" no Divide Ai para indicar que uma dívida foi paga, mantendo um histórico claro de transações.
- *Tarefas e responsáveis:*
Implementar tela de marcação de despesas quitadas [Rafael]
Adaptar tela principal para marcar despesa como quitada [Luis]
Implementar no backend a lógica de marcar despesa como quitada[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]

- *História #7:* Como usuário, eu gostaria de ver um resumo das minhas despesas no Divide Ai, incluindo o total gasto e o valor que cada pessoa pagou ou está devendo.
- *Tarefas e responsáveis:*
Implementar tela de resumo de despesas [Rafael]
Adaptar tela principal para mostrar total gasto e valor pago por cada pessoa [Luis]
Implementar no backend a lógica de somar despesa total e de cada pessoa no grupo[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]

- *História #8:*  Como usuário, eu gostaria de adicionar uma nota ou descrição a uma despesa no Divide Ai para fornecer informações adicionais sobre o que foi gasto.
- *Tarefas e responsáveis:*
Implementar na tela de resumo de despesas a opção de descrição/nota [Rafael/Luis]
Implementar no backend a lógica de incluir e editar descrição/nota de gastos[Paulo]
Integrar tela de cadastro com a respectiva lógica no backend [Gabriela]


Para rodar o projeto: 
Antes de começar, certifique-se de ter o seguinte instalado no seu sistema:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [PostgreSQL](https://www.postgresql.org/download/linux/ubuntu/) (certifique-se de criar um banco de dados para o projeto)

## Instalação

Siga os passos abaixo para configurar e executar o projeto:

1. Na raiz do projeto:

    npm install

2. Depois, vá para o diretório client e faça o mesmo:

    npm install

3. A configuração do banco:
Abra o arquivo db.js no diretório raiz do projeto.
Edite as configurações de conexão com o PostgreSQL para corresponder às suas configurações locais (usuário, senha, host, etc.).
Rode o seguinte comando para executar as migrações, criar as tabelas no banco de dados e popular ele inicialmente:
    npx knex migrate:latest

# Documentação da API

## URL Base

`http://localhost:3000/api`

---

## Endpoints

### Pessoas

---

#### Resumo da Pessoa

- **Endpoint:** `GET /people/:personId/summary`
- **Descrição:** Obter um resumo das despesas para uma pessoa específica.
- **Parâmetros:**
  - `personId` (inteiro) - ID da pessoa.
- **Resposta:**
  - Sucesso: 200 OK com um resumo das despesas.
  - Erro: 404 Não Encontrado

---

#### Criar Pessoa

- **Endpoint:** `POST /people`
- **Descrição:** Criar uma nova pessoa.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Nome da Pessoa"
    }
    ```
- **Resposta:**
  - Sucesso: 201 Criado com a pessoa criada.
  - Erro: 500 Erro Interno do Servidor

---

#### Obter Todas as Pessoas

- **Endpoint:** `GET /people`
- **Descrição:** Obter todas as pessoas.
- **Resposta:**
  - Sucesso: 200 OK com a lista de pessoas.
  - Erro: 500 Erro Interno do Servidor

---

#### Obter Pessoa por ID

- **Endpoint:** `GET /people/:id`
- **Descrição:** Obter informações sobre uma pessoa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da pessoa.
- **Resposta:**
  - Sucesso: 200 OK
  - Erro: 404 Não Encontrado

---

#### Atualizar Pessoa por ID

- **Endpoint:** `PUT /people/:id`
- **Descrição:** Atualizar informações de uma pessoa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da pessoa.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Novo Nome da Pessoa"
    }
    ```
- **Resposta:**
  - Sucesso: 200 OK com a pessoa atualizada.
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

#### Excluir Pessoa por ID

- **Endpoint:** `DELETE /people/:id`
- **Descrição:** Excluir uma pessoa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da pessoa.
- **Resposta:**
  - Sucesso: 204 Sem Conteúdo
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

#### Adicionar Pessoa a um Time

- **Endpoint:** `POST /people/add-to-team`
- **Descrição:** Adicionar uma pessoa a um time.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "personId": 1,
      "teamId": 1
    }
    ```
- **Resposta:**
  - Sucesso: 200 OK com a pessoa adicionada ao time.
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

### Despesas

#### Criar Despesa

- **Endpoint:** `POST /expenses`
- **Descrição:** Criar uma nova despesa.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Nome da Despesa",
      "price": 50.0,
      "split": [0.4, 0.6],
      "category": "Alimentação",
      "status": "Pendente",
      "description": "Descrição da Despesa",
      "teamId": 1,
      "personIds": [1, 2]
    }
    ```
- **Resposta:**
  - Sucesso: 201 Criado com a despesa criada.
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

#### Obter Todas as Despesas

- **Endpoint:** `GET /expenses`
- **Descrição:** Obter todas as despesas.
- **Resposta:**
  - Sucesso: 200 OK com a lista de despesas.
  - Erro: 500 Erro Interno do Servidor

---

#### Obter Despesa por ID

- **Endpoint:** `GET /expenses/:id`
- **Descrição:** Obter informações sobre uma despesa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da despesa.
- **Resposta:**
  - Sucesso: 200 OK
  - Erro: 404 Não Encontrado

---

#### Atualizar Despesa por ID

- **Endpoint:** `PUT /expenses/:id`
- **Descrição:** Atualizar informações de uma despesa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da despesa.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Novo Nome da Despesa"
    }
    ```
- **Resposta:**
  - Sucesso: 200 OK com a despesa atualizada.
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

#### Excluir Despesa por ID

- **Endpoint:** `DELETE /expenses/:id`
- **Descrição:** Excluir uma despesa específica por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID da despesa.
- **Resposta:**
  - Sucesso: 204 Sem Conteúdo
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

### Times

#### Criar Time

- **Endpoint:** `POST /teams`
- **Descrição:** Criar um novo time.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Nome do Time"
    }
    ```
- **Resposta:**
  - Sucesso: 201 Criado com o time criado.
  - Erro: 500 Erro Interno do Servidor

---

#### Obter Todos os Times

- **Endpoint:** `GET /teams`
- **Descrição:** Obter todos os times.
- **Resposta:**
  - Sucesso: 200 OK com a lista de times.
  - Erro: 500 Erro Interno do Servidor

---

#### Obter Time por ID

- **Endpoint:** `GET /teams/:id`
- **Descrição:** Obter informações sobre um time específico por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID do time.
- **Resposta:**
  - Sucesso: 200 OK
  - Erro: 404 Não Encontrado

---

#### Atualizar Time por ID

- **Endpoint:** `PUT /teams/:id`
- **Descrição:** Atualizar informações de um time específico por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID do time.
- **Corpo da Solicitação:**
  - Exemplo:
    ```json
    {
      "name": "Novo Nome do Time"
    }
    ```
- **Resposta:**
  - Sucesso: 200 OK com o time atualizado.
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---

#### Excluir Time por ID

- **Endpoint:** `DELETE /teams/:id`
- **Descrição:** Excluir um time específico por ID.
- **Parâmetros:**
  - `id` (inteiro) - ID do time.
- **Resposta:**
  - Sucesso: 204 Sem Conteúdo
  - Erro: 404 Não Encontrado ou 500 Erro Interno do Servidor

---