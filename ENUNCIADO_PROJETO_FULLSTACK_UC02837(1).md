# Projeto Full-Stack — UC02837

## Desenvolver projetos de programação

**Ação V2859 — Software Developer**

## 1. O desafio

Desenvolve uma aplicação web que resolva uma necessidade concreta e funcione de ponta a ponta: o utilizador interage com páginas web, o servidor aplica as regras da aplicação e os dados ficam guardados numa base de dados.

O projeto integra o frontend em HTML, CSS e JavaScript com um backend e uma base de dados relacional. A linguagem do backend e as ferramentas de acesso aos dados podem ser escolhidas de acordo com o trabalho realizado nas outras UCs. Node.js não é obrigatório. Podes continuar um frontend iniciado nas aulas, adaptando-o aos requisitos deste enunciado.

Deves conseguir demonstrar e explicar todo o percurso de uma operação: formulário → pedido HTTP → validação no servidor → base de dados → resposta → atualização da interface.

Ao longo do trabalho vais identificar o problema, planear a solução, modelar os dados, desenhar protótipos e fluxogramas, programar, testar, corrigir erros e documentar o resultado. Estas etapas concretizam as competências da UC02837.

## 2. Âmbito e organização

- Escolhe um dos seis temas apresentados na secção seguinte, ou apresenta uma alternativa equivalente ao formador.
- Define entre **3 e 5 funcionalidades principais**, incluindo a gestão completa de uma entidade: criar, consultar, editar e eliminar registos — CRUD.
- Constrói primeiro uma versão mínima funcional, com frontend, API e persistência real. Acrescenta extensões depois de verificares essa versão.
- Identifica na proposta os autores e a distribuição de tarefas, de acordo com a organização de trabalho definida para a turma.
- Em trabalho de grupo, cada elemento deve conseguir explicar a arquitetura, o fluxo de dados e as partes que desenvolveu. Regista as contribuições no repositório e na documentação.

O produto final deve funcionar num computador de teste seguindo apenas as instruções entregues. Pagamentos reais, envio de emails, alojamento pago, aplicações móveis e serviços externos não são necessários.

## 3. Propostas de projeto — escolher uma

As propostas mantêm os temas do projeto de frontend e acrescentam uma evolução full-stack. Os modelos de dados são exemplos de partida: adapta-os ao teu tema, cumprindo os requisitos comuns das secções 4 a 7.

### A) Gestor de Tarefas/Projetos Pessoais

**Objetivo:** organizar tarefas e acompanhar o que está por fazer, em curso ou concluído.

- Criar, listar, editar, concluir e remover tarefas.
- Filtrar por estado e categoria ou projeto.
- Apresentar os dados numa lista ou quadro com feedback visível.
- Guardar tarefas e respetiva categoria/projeto na base de dados.

**Modelo possível:** `projetos` e `tarefas`, com um projeto associado a várias tarefas.

**Regra a demonstrar:** uma tarefa só pode ser associada a um projeto existente e só aceita os estados definidos.

**Páginas possíveis:** início/resumo, lista de tarefas e formulário/detalhe de tarefa.

### B) Catálogo de Produtos/Loja Simples

**Objetivo:** permitir consultar produtos e gerir um pequeno catálogo.

- Listar produtos em cartões com imagem, título e preço.
- Pesquisar por nome e filtrar por categoria.
- Criar, editar e remover produtos através de uma página de gestão.
- Manter um carrinho simples em memória, com quantidades e total.
- Guardar produtos e categorias na base de dados.

**Modelo possível:** `categorias` e `produtos`, com vários produtos por categoria.

**Regra a demonstrar:** o preço não pode ser negativo e as quantidades do carrinho devem ser inteiros positivos.

**Páginas possíveis:** catálogo, detalhe/gestão de produto e carrinho.

O carrinho pode ser temporário. Não é necessário concluir compras, processar pagamentos nem gerir encomendas. Se implementares encomendas como extensão, os preços e totais devem ser confirmados pelo servidor.

### C) Quiz Interativo

**Objetivo:** apresentar perguntas, recolher respostas e mostrar uma pontuação.

- Apresentar perguntas em sequência, com opções de resposta.
- Mostrar progresso, feedback e pontuação final.
- Criar, listar, editar e remover perguntas numa página de gestão.
- Carregar os quizzes e as perguntas a partir da base de dados.
- Enviar as respostas ao backend para validação e cálculo da pontuação.

**Modelo possível:** `quizzes` e `perguntas`, com várias perguntas por quiz. Num modelo simples, as opções podem ser campos da pergunta; uma tabela `opcoes` é uma alternativa.

**Regra a demonstrar:** uma resposta só é aceite se pertencer à pergunta e ao quiz em execução. O backend calcula o resultado a partir das respostas guardadas, sem confiar numa pontuação enviada pelo browser.

**Páginas possíveis:** seleção de quiz, execução/resultados e gestão de perguntas.

As respostas corretas não devem ser enviadas no pedido público que carrega as perguntas antes de o participante responder. O histórico de tentativas pode ser uma extensão.

### D) Agenda de Eventos

**Objetivo:** consultar eventos e organizar uma agenda pessoal de interesse.

- Listar eventos numa grelha e consultar o respetivo detalhe.
- Filtrar por data e categoria.
- Marcar e desmarcar favoritos durante a utilização.
- Criar, editar e remover eventos numa página de gestão.
- Guardar eventos e categorias na base de dados.

**Modelo possível:** `categorias` e `eventos`.

**Regra a demonstrar:** a data/hora de fim de um evento, quando existir, não pode ser anterior à de início.

**Páginas possíveis:** agenda, detalhe de evento e gestão de eventos.

Os favoritos podem permanecer em memória durante a sessão. Guardá-los por utilizador é uma extensão.

### E) Blog/Diário Pessoal

**Objetivo:** escrever, organizar e consultar publicações.

- Listar publicações e filtrar por tag.
- Abrir uma página de detalhe com conteúdo carregado da API.
- Criar, editar e remover publicações através de um formulário.
- Guardar publicações e categorias na base de dados.

**Modelo possível:** `categorias` e `publicacoes`. Num modelo simples, uma tag pode ser um campo de texto normalizado da publicação. Uma relação entre publicações e várias tags é uma extensão.

**Regra a demonstrar:** título e conteúdo são obrigatórios; o detalhe de uma publicação inexistente apresenta uma mensagem apropriada.

**Páginas possíveis:** lista de publicações, detalhe e editor.

### F) Sistema de Reservas

**Objetivo:** consultar horários e efetuar reservas de um serviço ou recurso.

- Mostrar uma lista de horários inicialmente preparada com dados de demonstração.
- Criar uma reserva por formulário e apresentar confirmação.
- Listar, consultar, editar e cancelar/eliminar reservas.
- Guardar horários e reservas na base de dados; a disponibilidade apresentada deve refletir as reservas existentes.

**Modelo possível:** `horarios` e `reservas`, com uma chave estrangeira que associa a reserva a um horário.

**Regra a demonstrar:** num serviço com uma vaga por horário, a base de dados deve impedir duas reservas para o mesmo horário, mesmo que cheguem pedidos em simultâneo. Uma restrição `UNIQUE` sobre `reservas.horario_id` é uma solução simples; o backend devolve um conflito compreensível.

**Páginas possíveis:** horários/serviços, formulário de reserva e gestão de reservas.

Podes usar horários fixos de demonstração. Não são necessários calendários externos, pagamentos ou notificações.

## 4. Requisitos do frontend

### 4.1. Estrutura e conteúdo

- Pelo menos **3 páginas HTML ligadas entre si**, com navegação funcional e finalidade clara.
- HTML semântico, usando os elementos adequados, como `header`, `nav`, `main`, `section` e `footer`.
- Hierarquia coerente de títulos, imagens com texto alternativo e formulários com `label` associado a cada campo.
- Textos e imagens coerentes com o tema. Identificar a origem dos recursos externos utilizados.
- Pelo menos um formulário funcional e uma lista/grelha gerada com JavaScript a partir da API.

### 4.2. Apresentação e acessibilidade

- Layout responsivo para telemóvel e computador, recorrendo a Flexbox e/ou Grid.
- Cores, tipografia, espaçamentos e componentes consistentes.
- Navegação por teclado, foco visível e botões com nomes compreensíveis.
- Conteúdo legível, sem sobreposições ou deslocamento horizontal indevido.
- É permitido usar Bootstrap ou Tailwind CSS, desde que consigas explicar o layout e a adaptação realizada.

### 4.3. JavaScript e interação

- Usar DOM, eventos, funções, arrays e objetos para organizar os dados e a interação.
- Usar `fetch` e programação assíncrona para comunicar com o backend.
- Permitir executar o CRUD principal pelo browser, incluindo edição efetiva dos campos do registo.
- Incluir pesquisa, filtro ou ordenação adequada à proposta escolhida.
- Validar campos obrigatórios e formatos no frontend e mostrar erros junto dos campos ou num local visível.
- Apresentar estados de carregamento, lista vazia, sucesso e erro nas operações que os justifiquem.
- Pedir confirmação antes de eliminar um registo e impedir submissões repetidas enquanto o pedido está em curso.
- Tratar respostas HTTP de erro: um pedido `fetch` concluído não significa que a operação teve sucesso.
- Não apresentar erros de JavaScript por tratar na consola durante os testes de aceitação.

Arrays e objetos podem representar o estado temporário da interface. Os registos principais devem ser carregados e persistidos na base de dados. `localStorage`, ficheiros JSON e arrays no servidor não substituem essa persistência.

## 5. Requisitos da base de dados

### 5.1. Modelo relacional

Usa **uma base de dados relacional com SQL**, preferencialmente o sistema trabalhado na UC02830. MySQL é uma opção; também podes usar MariaDB, PostgreSQL ou SQL Server, quando correspondam à abordagem trabalhada ou acordada para o projeto. Identifica o sistema escolhido e adapta os tipos, os scripts e o conector à sua sintaxe. Entrega um modelo pequeno, coerente e explicado:

- Pelo menos **duas tabelas relacionadas**, com uma relação justificada pelo domínio.
- Uma chave primária por tabela e pelo menos uma chave estrangeira efetivamente criada na base de dados.
- Uma entidade principal com identificador e pelo menos quatro campos adicionais relevantes, incluindo a referência à entidade relacionada quando fizer sentido.
- Tipos de dados apropriados: texto, números, datas e estados conforme o significado de cada campo. Usa `DECIMAL` para preços.
- Campos obrigatórios definidos com `NOT NULL`, unicidade onde fizer sentido e valores por defeito adequados.
- Regra explícita para eliminar dados relacionados: impedir a operação, eliminar dependentes ou outra política justificada. A interface deve explicar o resultado.
- Diagrama entidade-relação com cardinalidades e um pequeno dicionário de dados: campo, tipo, obrigatoriedade e finalidade.

Evita tabelas criadas apenas para cumprir uma quantidade. Por exemplo, separar categorias de produtos deve permitir reutilizar categorias e impedir referências inválidas.

### 5.2. Utilização e entrega dos dados

- Implementar `SELECT`, `INSERT`, `UPDATE` e `DELETE`, diretamente ou através do ORM.
- Apresentar pelo menos uma consulta que combine as tabelas relacionadas, através de `JOIN` ou carregamento da relação pelo ORM.
- Usar queries parametrizadas/prepared statements no conector escolhido. Se usares um ORM, usar as suas operações parametrizadas; não concatenar entradas do utilizador em SQL.
- Disponibilizar scripts que criem a estrutura e dados de demonstração. Com um ORM, entregar também os modelos/schema, a configuração necessária e o processo de criação/migração e carregamento de dados iniciais (seed).
- Incluir pelo menos cinco registos da entidade principal e dados relacionados suficientes para testar a aplicação. Usar dados fictícios.
- Confirmar que os registos criados e editados continuam corretos depois de recarregar a página e reiniciar o backend.
- Documentar como exportar e restaurar os dados, e testar a recriação da base de dados numa base de teste vazia.

Deves conseguir explicar as tabelas, as relações e o efeito das operações, mesmo que uses um ORM.

## 6. Requisitos do backend

### 6.1. Tecnologias e estrutura

Escolhe **uma linguagem e um ambiente de backend que permitam disponibilizar uma API HTTP e aceder à base de dados**. Privilegia a linguagem que praticaste nas UCs de programação e uma solução cuja implementação consigas explicar.

As opções seguintes exemplificam como continuar diferentes linguagens num projeto web. Não significam que todas tenham sido lecionadas nesta turma, nem que devas aprender vários frameworks:

| Linguagem | Opção possível para o backend | Acesso aos dados — exemplos |
|---|---|---|
| JavaScript | Node.js com Express | `mysql2` para MySQL, conector do SGBD escolhido ou Prisma |
| Python | Flask ou FastAPI | Conector SQL compatível com o SGBD ou SQLAlchemy |
| PHP | PHP com rotas/endpoints próprios; framework apenas se já trabalhado | PDO com o driver do SGBD |
| C# | ASP.NET Core Web API | ADO.NET com o provider adequado ou Entity Framework Core |
| Java | Servlets ou Spring Boot, conforme a abordagem trabalhada | JDBC ou JPA com implementação e driver adequados |

Uma aplicação exclusivamente de consola não cumpre a integração web. A linguagem estudada pode ser reutilizada, mas deve existir um servidor que receba os pedidos do frontend e devolva as respostas previstas neste enunciado.

Escolhe apenas uma stack, apresenta-a na proposta e justifica-a no README. Não é obrigatório usar ORM: SQL direto parametrizado e ORM são alternativas válidas. A escolha de framework, biblioteca ou linguagem não dá, por si só, vantagem na avaliação.

#### Relação com as outras UCs

| UC | O que deves reutilizar no projeto |
|---|---|
| UC00245 — Desenvolver algoritmos | Decomposição do problema, pseudocódigo, fluxograma e decisões das regras de negócio |
| UC00607 — Programação estruturada | Funções, condições, ciclos, estruturas de dados e organização da lógica, reutilizando a linguagem praticada quando adequado |
| UC00608 — Programação orientada a objetos | Modelação de entidades, objetos, métodos e encapsulamento, conforme a abordagem trabalhada; explica a sua aplicação no teu código |
| UC02830 — Base de dados com SQL | Tabelas, chaves, relações, restrições e consultas no SGBD trabalhado |
| UC02834 — Programação para a web | Páginas, formulários, interação, pedidos/respostas e ligação entre frontend e servidor |

Os requisitos são comuns às várias stacks: funcionamento, qualidade dos dados, validação, integração, testes e capacidade de explicação. Se a linguagem das aulas não aparecer na tabela, pode ser proposta uma solução equivalente que cumpra estes requisitos.

O backend deve:

- Receber e interpretar JSON usando os mecanismos da stack escolhida (por exemplo, `express.json()` no Express).
- Ler a configuração através de variáveis de ambiente ou do mecanismo de configuração externo da stack. Entregar `.env.example` ou equivalente sem segredos e explicar como criar a configuração local.
- Organizar rotas, validações e acesso aos dados de forma identificável. Podes usar ficheiros separados e funções reutilizáveis, evitando repetir a mesma lógica em várias rotas.
- Usar tratamento de erros nas operações assíncronas e uma resposta controlada para erros inesperados.
- Incluir o manifesto de dependências/projeto e os comandos de arranque adequados à stack, com versões fixadas para permitir a reprodução.
- Definir e documentar as versões da linguagem/runtime, do servidor/framework, do SGBD e das dependências com que o projeto foi testado.

### 6.2. API REST mínima

Substitui `recursos` pelo nome da entidade principal: tarefas, produtos, perguntas, eventos, publicacoes ou reservas.

| Método | Rota | Operação | Resposta esperada |
|---|---|---|---|
| GET | `/api/estado` | Indicar que a API está em execução | `200` |
| GET | `/api/recursos` | Listar registos | `200` com um array, incluindo `[]` quando vazio |
| GET | `/api/recursos/:id` | Consultar um registo | `200` ou `404` |
| POST | `/api/recursos` | Criar um registo válido | `201` com o registo criado e o seu ID |
| PUT | `/api/recursos/:id` | Editar os campos do registo | `200`, `400`, `404` ou `409`, conforme o caso |
| DELETE | `/api/recursos/:id` | Eliminar um registo | `204` sem corpo, `404` ou `409` |

Acrescenta uma rota de consulta para a entidade relacionada, para alimentar seletores e mostrar relações no frontend. Um `PATCH` para concluir uma tarefa ou alterar um estado pode complementar o `PUT`, mas não substitui a edição dos restantes campos.

O endpoint de estado prova apenas que a API responde. A ligação à base de dados e o funcionamento da aplicação são demonstrados através dos testes às operações reais.

### 6.3. Validação e regras do domínio

O backend deve validar os pedidos mesmo quando estes não são feitos pelo frontend:

- Identificadores com formato válido.
- Campos obrigatórios, tamanho dos textos e tipos de dados.
- Limites de valores e estados permitidos.
- Existência dos registos referidos por chaves estrangeiras.
- Pelo menos uma regra própria do tema escolhido, como as apresentadas na secção 3.

Usa `400` para dados ou formatos inválidos, `404` para registos inexistentes, `409` para conflitos como duplicação proibida e `500` para erros internos inesperados. As respostas de erro devem ter uma estrutura consistente e mensagens úteis, sem revelar passwords, SQL interno ou stack traces.

Exemplo de erro:

```json
{
  "erro": "O título é obrigatório."
}
```

Uma operação rejeitada não pode ficar apresentada como concluída na interface. Se uma ação precisar de várias escritas que devem ter sucesso em conjunto, usa uma transação ou simplifica o fluxo para evitar estados incompletos.

## 7. Integração e cuidados técnicos

- Servir o frontend pelo servidor da aplicação (por exemplo, `express.static` no Express), ou usar um servidor separado e configurar CORS no backend para a origem utilizada.
- Abrir a aplicação por HTTP. Documentar as portas e os endereços usados.
- Manter a ligação à base de dados e as credenciais exclusivamente no backend.
- Manter `.env`, passwords reais e outros segredos fora do Git e do ficheiro de entrega.
- Mostrar texto introduzido pelo utilizador de forma segura, por exemplo com `textContent`, evitando interpretá-lo como HTML.
- Usar dados fictícios nos formulários, testes e imagens de demonstração.
- Confirmar que dados associados a listas e seletores vêm da API e que a página de detalhe consulta o registo correspondente ao ID.

**Autenticação é uma extensão**, não um requisito comum. A versão sem autenticação destina-se à demonstração local; não deve ser publicada na Internet com operações de gestão abertas. Se adicionares utilizadores, protege as operações no servidor, guarda passwords com hashing apropriado e testa os acessos permitidos e recusados. Esconder um botão não protege uma rota.

Também são extensões: upload de ficheiros, envio de emails, integrações externas, Docker, OpenAPI/Swagger, alojamento online e funcionalidades adicionais. Uma documentação simples da API em Markdown cumpre o requisito de documentação.

## 8. Passos de desenvolvimento e pontos de verificação

### Passo 1 — Apresentar a proposta

1. Escolhe o tema e explica o problema e os utilizadores a que se destina.
2. Define as 3 a 5 funcionalidades principais e identifica as extensões que ficam fora da primeira versão.
3. Identifica os dados necessários, as tecnologias e os autores.
4. Apresenta a proposta ao formador para ajustar o âmbito antes de desenvolver.

**Entregável E1:** proposta curta, incluindo uma lista de funcionalidades com critérios verificáveis. Exemplo: «Ao criar uma tarefa válida, esta aparece na lista e mantém-se depois de reiniciar o servidor.»

### Passo 2 — Desenhar e planear

1. Desenha o mapa de navegação e os wireframes das três páginas.
2. Modela as tabelas, relações e restrições.
3. Desenha pelo menos um fluxograma de uma operação principal, incluindo uma decisão e o percurso de erro. Escreve o pseudocódigo correspondente.
4. Define as rotas da API, os dados recebidos e as respostas.
5. Organiza as tarefas por ordem de execução, com responsáveis e marcos de revisão.

**Entregável E2:** wireframes, diagrama de dados, dicionário de campos, fluxograma/pseudocódigo, contrato inicial da API e plano de tarefas.

**Verificação:** o formulário, a rota e a tabela devem representar os mesmos campos e regras.

### Passo 3 — Preparar o ambiente

1. Cria o repositório e a estrutura de pastas.
2. Configura o projeto na linguagem escolhida, dependências, comandos de arranque, `.gitignore` e `.env.example` ou configuração de exemplo equivalente.
3. Cria a base de dados com os scripts e dados fictícios.
4. Faz o servidor responder e testa uma consulta real à base de dados.

**Entregável E3:** versão inicial executável, scripts de base de dados e primeiras instruções de instalação.

### Passo 4 — Construir o frontend

1. Implementa as três páginas com HTML semântico e navegação.
2. Aplica o layout responsivo e os cuidados de acessibilidade.
3. Programa os eventos, formulários, listas e feedback.
4. Podes usar dados em memória nesta fase para testar a interface. Identifica-os para serem substituídos pela API.

**Entregável E4:** frontend navegável, com formulários e interações demonstráveis.

### Passo 5 — Implementar o backend e a persistência

1. Implementa e testa a leitura da entidade principal e dos dados relacionados.
2. Acrescenta criação, edição e eliminação.
3. Valida os dados e aplica as regras do domínio.
4. Testa as rotas com Postman, Thunder Client ou Bruno, incluindo pedidos inválidos.

**Entregável E5:** API com CRUD persistente e coleção ou registo reproduzível de pedidos de teste.

### Passo 6 — Ligar a aplicação completa

1. Substitui os dados simulados pelos pedidos `fetch`.
2. Liga os formulários às rotas e apresenta a resposta confirmada pelo servidor.
3. Implementa pesquisa/filtro/ordenação e as interações específicas do tema.
4. Trata listas vazias, falhas de rede e erros de validação.
5. Reinicia a aplicação e confirma que os dados se mantêm.

**Entregável E6:** aplicação full-stack com um percurso completo executado no browser.

### Passo 7 — Testar, corrigir e melhorar

1. Executa os testes da secção 9 e regista os resultados.
2. Identifica a causa de cada problema, corrige-o e repete o teste relevante.
3. Regista pelo menos uma melhoria justificada de organização, algoritmo, consulta ou experiência de utilização. Compara o comportamento antes e depois.
4. Pede a outra pessoa que siga o README numa base de teste vazia e regista dificuldades e correções.

**Entregável E7:** testes executados, evidências, registo de erros/correções e melhoria fundamentada.

### Passo 8 — Entregar e apresentar

1. Confirma a checklist final e a versão do código a entregar.
2. Revê o README, a documentação técnica e o guia de utilização.
3. Prepara uma demonstração com dados fictícios e um percurso de sucesso e outro de erro.
4. Explica as decisões, as contribuições e as limitações reais da aplicação.

**Entregável E8:** pacote final completo e apresentação/demonstração.

Ao terminar cada etapa: **Verificar** se funciona, **Validar** se cumpre o requisito e **Versionar** o resultado com um commit compreensível.

## 9. Testes de aceitação

Regista, para cada teste, os passos/dados usados, o resultado esperado, o resultado observado, a evidência e o estado: passou, falhou ou não executado. Uma lista de testes planeados não prova que foram executados.

| ID | Situação a testar | Resultado esperado |
|---|---|---|
| T01 | Instalar e arrancar seguindo o README numa base de teste vazia | Aplicação acessível e dados de demonstração disponíveis |
| T02 | Abrir as três páginas e navegar por teclado | Navegação completa, foco visível e sem links quebrados |
| T03 | Consultar a lista e o detalhe | Dados reais da API e da base de dados |
| T04 | Criar um registo válido no frontend | Resposta `201`, ID atribuído e registo visível |
| T05 | Editar campos e recarregar a página | Alterações persistidas e apresentadas corretamente |
| T06 | Eliminar um registo, após confirmação | Registo removido da lista e da base de dados |
| T07 | Pesquisar, filtrar ou ordenar | Resultados corretos, incluindo a situação sem correspondências |
| T08 | Enviar um campo obrigatório vazio diretamente à API | Erro `400`, mensagem útil e nenhuma escrita inválida |
| T09 | Enviar tipo, limite ou ID malformado | Pedido rejeitado com `400`, sem falha do servidor |
| T10 | Consultar, editar e eliminar um ID válido mas inexistente | Resposta `404`, sem mensagem falsa de sucesso |
| T11 | Usar uma referência inexistente ou eliminar dados relacionados | Integridade mantida e erro controlado conforme a regra documentada |
| T12 | Repetir um valor único ou violar a regra do tema | Operação recusada de forma consistente; `409` quando existir conflito |
| T13 | Testar uma listagem sem dados numa base de teste | API devolve `[]` e interface mostra o estado vazio |
| T14 | Desligar temporariamente o backend ou a base de dados durante uma operação | Feedback de erro, sem sucesso aparente nem detalhes internos expostos |
| T15 | Reiniciar o backend e voltar a abrir a página | Dados mantidos; temporários da interface tratados conforme documentado |
| T16 | Usar a aplicação em largura de telemóvel e de computador | Conteúdo legível e operações acessíveis |
| T17 | Rever o registo de erro corrigido e repetir o teste | Correção demonstrada, sem repetir o comportamento incorreto |

No sistema de reservas, inclui dois pedidos concorrentes para o mesmo horário. No quiz, inclui uma tentativa de enviar uma pontuação manipulada. Nos restantes temas, testa a regra de domínio definida na proposta.

Usa uma base de dados de teste para ensaios de eliminação e falha. Para limpar dados, identifica explicitamente essa base e confirma o alvo antes de executar comandos destrutivos.

## 10. Estrutura recomendada e entregáveis finais

```text
projeto-tema/
├── README.md
├── .gitignore
├── backend/
│   ├── [manifesto e versões das dependências]
│   ├── [configuração de exemplo sem segredos]
│   ├── src/
│   │   ├── [ponto de entrada do servidor]
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── db/
│   │   └── validators/
│   └── [modelos e migrações]     # quando usares ORM
├── frontend/
│   ├── index.html
│   ├── lista.html
│   ├── detalhe.html
│   ├── css/styles.css
│   ├── js/
│   └── assets/
├── database/
│   ├── schema.sql               # opção SQL direto
│   └── seed.sql                 # ou carregamento inicial documentado pelo ORM
└── docs/
    ├── proposta.md
    ├── planeamento.md
    ├── modelo-dados.md
    ├── wireframes/
    ├── fluxograma/
    ├── api.md
    ├── testes.md
    ├── correcoes-e-melhorias.md
    └── guia-utilizacao.md
```

Os nomes e a divisão dos ficheiros podem ser adaptados às convenções da stack. Os elementos entre parênteses retos são indicações, não nomes literais de ficheiros. Exemplos de ficheiros de projeto/dependências: `package.json` e lockfile em Node.js, `requirements.txt` ou `pyproject.toml` em Python, `composer.json` quando usas Composer em PHP, `.csproj` em C# e `pom.xml` ou `build.gradle` em Java. Se o PHP não usar dependências externas, basta documentar a versão, as extensões e o arranque. Entrega uma única versão funcional e identifica a tecnologia escolhida; elimina ficheiros vazios ou variantes que não fazem parte da solução.

### Conteúdo obrigatório da entrega

1. **Código-fonte completo**, por repositório acessível ao formador ou ZIP, indicando a versão/commit final. Excluir dependências reinstaláveis (`node_modules`, `.venv`, `vendor`, conforme a stack), ficheiros de configuração com segredos e artefactos de compilação dispensáveis.
2. **Base de dados reproduzível**: scripts SQL ou modelos/migrações do ORM escolhido, dados fictícios, instruções de criação e restauro.
3. **README**: tema, autores, funcionalidades, stack e versões testadas, requisitos de instalação, configuração do ambiente, comandos de preparação e arranque, endereços e limitações conhecidas.
4. **Planeamento e desenho**: proposta, requisitos, tarefas, modelo de dados, wireframes, fluxograma e pseudocódigo.
5. **Documentação da API**: método, rota, parâmetros, corpo, respostas e exemplos de sucesso/erro para cada endpoint.
6. **Testes e correções**: resultados observados, pedidos reproduzíveis e evidências ligadas aos requisitos. Incluir a melhoria realizada.
7. **Guia de utilização**: passos para executar as principais operações e imagens úteis.
8. **Demonstração e explicação**: percurso full-stack, decisões técnicas, contribuições individuais e limites da solução.

Referências a tutoriais, templates, bibliotecas, imagens e apoio de IA devem ser identificadas. Se usares IA, regista onde ajudou e como verificaste o resultado. Cada autor deve compreender e conseguir alterar o código que apresenta.

## 11. Critérios de apreciação

O projeto será apreciado pela evidência apresentada nas seguintes dimensões:

- **Planeamento e desenho:** problema definido, requisitos verificáveis, dados, fluxograma e protótipos coerentes.
- **Frontend:** semântica, acessibilidade, responsividade, JavaScript e clareza de utilização.
- **Backend e base de dados:** CRUD, relações, validação, tratamento de erros e persistência.
- **Integração:** operações concluídas pelo browser e consistência entre interface, API e dados.
- **Testes e melhoria:** casos realmente executados, erros diagnosticados, correções verificadas e melhoria fundamentada.
- **Entrega e explicação:** instalação reproduzível, documentação útil, autoria e domínio das decisões técnicas.

Esta secção define o que deve ser demonstrado; não substitui a grelha de classificação da ação. Funcionalidades opcionais não compensam requisitos obrigatórios em falta.

## 12. Checklist antes da entrega

- [ ] Tema e funcionalidades correspondem à proposta acordada.
- [ ] Existem três páginas HTML navegáveis e responsivas.
- [ ] O CRUD principal funciona integralmente pelo frontend.
- [ ] Existe pesquisa, filtro ou ordenação e feedback de carregamento, vazio, sucesso e erro.
- [ ] O backend valida dados independentemente do frontend.
- [ ] Existem duas tabelas relacionadas, com chaves e restrições adequadas.
- [ ] Os dados persistem depois de reiniciar a aplicação.
- [ ] A regra específica do tema foi implementada e testada.
- [ ] Scripts e instruções permitem recriar a base de dados.
- [ ] Wireframes, modelo, fluxograma e documentação correspondem ao código entregue.
- [ ] Os testes têm resultados observados e as correções foram verificadas.
- [ ] O README foi seguido por outra pessoa num ambiente de teste.
- [ ] Não existem segredos nem dados pessoais reais no pacote.
- [ ] A versão final está identificada e as contribuições estão registadas.
- [ ] Consigo explicar e demonstrar o percurso frontend → API → base de dados.

## Referência da unidade de competência

UC02837 — Desenvolver projetos de programação, no referencial 481RA116 — Técnico/a de Desenvolvimento de Software, páginas 33–35 da [cópia pública do referencial de competências](https://eisnt.com/cursos_efa/481RA116_Referencia_de_Competencias_TEC.pdf). O enquadramento da UC orienta as etapas de trabalho; a stack, os temas e os mínimos técnicos deste enunciado são a concretização pedagógica para esta ação.
