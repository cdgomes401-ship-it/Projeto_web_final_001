# House Goblin

## Sobre o projeto

O House Goblin ajuda o utilizador a organizar tarefas domésticas por divisão da casa. O utilizador pode criar uma conta, consultar tarefas e atualizar a sua lista.

**Autores:** Carlos, Arthur e João.


## Funcionalidades

- Criar uma conta e iniciar sessão.
- Criar uma lista inicial de tarefas para cada conta.
- Consultar e filtrar tarefas por divisão.
- Adicionar tarefas.
- Alterar o estado, a prioridade e o nível de energia de uma tarefa.
- Guardar uma estimativa de tempo.
- Remover tarefas.
- Usar o modo de foco e o temporizador.

## Tecnologias e versões

O frontend usa HTML, CSS e JavaScript. O backend usa Node.js e Express. O sistema de base de dados é MySQL.

O projeto usa SQL parametrizado através do conector `mysql2`. A aplicação serve as páginas e a API pelo mesmo servidor Express. Esta abordagem evita configurar um segundo servidor para o frontend durante a utilização local.

Versões identificadas nos ficheiros de dependências e no ambiente de desenvolvimento:

| Tecnologia | Versão |
|---|---:|
| Node.js | 24.21.0 |
| npm | 11.19.0 |
| Express | 5.3.0 |
| mysql2 | 3.24.6 |
| bcrypt | 6.0.0 |
| express-session | 1.19.0 |
| dotenv | 18.0.8 |
| nodemon | 3.1.14 |
| MySQL Server | Registar a versão instalada antes da entrega |


## Requisitos

Instale estes programas:

1. Node.js e npm.
2. MySQL Server.
3. MySQL Workbench ou outro cliente MySQL.
4. Um navegador atualizado.

Os exemplos deste guia usam o Windows PowerShell. Use `npm.cmd` se o PowerShell bloquear o comando `npm`.

## Preparar a base de dados

O script `Base_de_dados/Base_de_dados_inicial.sql` cria a base de dados `bd_tarefas` e as tabelas `users` e `tarefas`.

> **Atenção:** o script contém `DROP DATABASE IF EXISTS bd_tarefas`. A execução elimina a base de dados `bd_tarefas` e os seus dados atuais. Execute o script apenas numa instalação nova ou numa base de dados de teste que possa apagar. Confirme o nome da base de dados antes de executar o script.

Siga estes passos:

1. Inicie o serviço MySQL.
2. Abra o MySQL Workbench.
3. Ligue-se ao servidor MySQL local.
4. Abra `Base_de_dados/Base_de_dados_inicial.sql`.
5. Confirme que pode apagar a base de dados `bd_tarefas`.
6. Execute o script.
7. Confirme que as tabelas `users` e `tarefas` aparecem dentro de `bd_tarefas`.

O script cria tabelas vazias. O servidor carrega as tarefas iniciais em `Base_de_dados/tarefas_iniciais.sql` quando cria uma conta. Não execute esse segundo ficheiro manualmente.

## Configurar a ligação à base de dados

Crie o ficheiro `.env` na pasta `Base_de_dados`.

Abra um terminal na pasta `projetofinalcopy` e execute:

```powershell
Copy-Item .\Base_de_dados\.env.example .\Base_de_dados\.env
notepad .\Base_de_dados\.env
```

Preencha o ficheiro com os dados do seu servidor MySQL:

```dotenv
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USER=utilizador_mysql
DATABASE_PASSWORD="password_mysql"
DATABASE_NAME=bd_tarefas
```

Substitua `utilizador_mysql` e `password_mysql` pelos valores da sua instalação. Se o utilizador não tiver password, deixe `DATABASE_PASSWORD=` vazio.

Não publique o ficheiro `.env`. Este ficheiro contém credenciais locais. O ficheiro `.env.example` contém apenas valores de exemplo.

## Instalar dependências

Abra um terminal na pasta `projetofinalcopy` e execute:

```powershell
cd .\Base_de_dados
npm.cmd ci
```

O comando `npm.cmd ci` instala as dependências indicadas em `package-lock.json`.

## Iniciar o servidor

Inicie o servidor na pasta `projetofinalcopy/Base_de_dados`:

```powershell
npm.cmd run dev
```

Para iniciar sem Nodemon, use:

```powershell
npm.cmd start
```

Mantenha o terminal aberto enquanto utiliza a aplicação. O servidor apresenta esta mensagem quando inicia:

```text
Tarefinha disponível em http://localhost:3000
```

Prima `Ctrl+C` no terminal para parar o servidor.

## Abrir e utilizar a aplicação

Abra a página inicial no navegador:

```text
http://localhost:3000/
```

Para criar uma conta selecione o botao Sign Up, reencha o nome de utilizador, o email, a password e a confirmação da password. Após o registo, a aplicação inicia a sessão e abre a página de tarefas.

Para iniciar sessão numa conta existente, use o formulário de login na página inicial. Também pode abrir a página de tarefas após iniciar sessão:


Use sempre os endereços `http://localhost:3000`. Não abra os ficheiros HTML diretamente pelo Explorador de Ficheiros. Não use a extensão Live Server para esta aplicação. Esses métodos não passam pelo backend Express e não usam a sessão da aplicação.

## Percurso de uma operação

Ao adicionar uma tarefa, a aplicação segue este percurso:

1. O utilizador preenche o formulário no navegador.
2. O JavaScript envia os dados em JSON para a API.
3. O servidor Express recebe o pedido.
4. O servidor executa uma consulta SQL parametrizada no MySQL.
5. O servidor devolve uma resposta JSON.
6. O frontend atualiza a lista quando recebe uma resposta de sucesso.

As operações protegidas usam a sessão do utilizador. O servidor filtra, cria, atualiza e remove tarefas associadas a essa conta.

## Rotas principais da API

| Método | Rota | Utilização |
|---|---|---|
| `POST` | `/api/register` | Criar uma conta e carregar as tarefas iniciais |
| `POST` | `/api/login` | Iniciar sessão |
| `GET` | `/api/tarefas` | Consultar as tarefas da sessão atual |
| `GET` | `/api/tarefas/categorias` | Consultar as divisões disponíveis |
| `POST` | `/api/tarefas` | Criar uma tarefa |
| `PATCH` | `/api/tarefas/:id` | Atualizar estado, prioridade, energia ou estimativa |
| `DELETE` | `/api/tarefas/:id` | Remover uma tarefa |

As rotas de tarefas exigem uma sessão iniciada. Os pedidos de criação e atualização usam JSON.

## Verificar os dados

No MySQL Workbench, execute:

```sql
USE bd_tarefas;

SELECT id, nome_utilizador, email
FROM users
ORDER BY id DESC;

SELECT id_user, COUNT(*) AS total_tarefas
FROM tarefas
GROUP BY id_user
ORDER BY id_user;
```

Após criar uma conta, confirme que existe um utilizador em `users` e que as tarefas iniciais estão associadas ao respetivo `id_user`.

## Teste manual básico

Execute este teste numa base de dados de desenvolvimento:

1. Inicie o MySQL.
2. Execute `Base_de_dados/Base_de_dados_inicial.sql`.
3. Configure `Base_de_dados/.env`.
4. Instale as dependências e inicie o servidor.
5. Crie uma conta com um email novo.
6. Confirme que a página de tarefas apresenta tarefas.
7. Adicione uma tarefa e altere a sua prioridade.
8. Recarregue a página e confirme que as alterações continuam guardadas.
9. Remova a tarefa.
10. Termine a sessão ou abra uma janela privada e confirme que as rotas de tarefas recusam pedidos sem autenticação.

O `package.json` não define testes automatizados. Registe os resultados dos testes manuais antes da entrega.

## Limitações conhecidas

- O servidor usa a porta `3000`. A porta está definida em `Base_de_dados/server.js`.
- As sessões usam o armazenamento em memória do Express. Um reinício do servidor termina as sessões ativas. O utilizador tem de iniciar sessão novamente.
- O segredo da sessão está definido no código. Use a aplicação apenas em ambiente local. Não a publique na Internet sem configurar um segredo externo e um armazenamento de sessões adequado.
- O servidor não implementa uma rota para consultar uma tarefa pelo ID.
- A atualização de tarefas usa `PATCH`; não existe uma rota `PUT`.
- O script `Base_de_dados_inicial.sql` apaga e recria `bd_tarefas`. Não o use para restaurar dados que pretende conservar.

## Problemas comuns

| Problema | Ação |
|---|---|
| O servidor não liga ao MySQL | Confirme que o MySQL está iniciado e verifique host, porta e credenciais em `.env`. |
| O MySQL devolve `Access denied` | Corrija `DATABASE_USER` ou `DATABASE_PASSWORD` e confirme as permissões do utilizador. |
| O servidor indica que `bd_tarefas` não existe | Execute `Base_de_dados/Base_de_dados_inicial.sql` numa base de dados vazia. |
| A página não carrega tarefas | Confirme que o servidor está em execução e que iniciou sessão. |
| A porta `3000` já está em uso | Pare o outro servidor que usa a porta ou altere a porta no código. |
| O PowerShell bloqueia `npm` | Execute os comandos com `npm.cmd`. |


