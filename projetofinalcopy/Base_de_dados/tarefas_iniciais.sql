-- Registration template: set @id_user before running this file.
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('WC', 'Aspirar chão', 'Semanal', 1, 5, 2, FALSE, NULL, @id_user),
('WC', 'Lavar chão', 'Semanal', 1, 8, 2, FALSE, NULL, @id_user),
('WC', 'Lavar louças de casa de banho', 'Semanal', 1, 12, 2, FALSE, NULL, @id_user),
('WC', 'Colocar lixívia na sanita', 'Semanal', 3, 2, 0, FALSE, NULL, @id_user),
('WC', 'Limpar espelhos', 'Semanal', 1, 3, 1, FALSE, NULL, @id_user),
('WC', 'Mudar lixo', 'Semanal', 1, 2, 0, FALSE, NULL, @id_user),
('WC', 'Trocar areias dos gatos', 'Semanal', 1, 5, 1, FALSE, NULL, @id_user),
('WC', 'Substituir tapete e toalhas', 'Semanal', 1, 2, 0, FALSE, NULL, @id_user),
('WC', 'Limpar piaçaba e pousador', 'Semanal', 1, 2, 1, FALSE, NULL, @id_user),
('WC', 'Limpar paredes', 'Semanal', 3, 15, 3, FALSE, NULL, @id_user),
('WC', 'Limpar tetos com lixívia', 'Mensal', 1, 15, 3, FALSE, NULL, @id_user),
('WC', 'Lavar janelas por dentro', 'Mensal', 2, 10, 2, FALSE, NULL, @id_user),
('WC', 'Limpar juntas dos azulejos', 'Semestral', 3, 20, 3, FALSE, NULL, @id_user),
('WC', 'Limpar armários interior', 'Semestral', 2, 10, 1, FALSE, NULL, @id_user),
('WC', 'Verificar datas de validade dos medicamentos', 'Semestral', 1, 5, 0, FALSE, NULL, @id_user),
('WC', 'Limpar em baixo do armário', 'Semestral', 1, 5, 1, FALSE, NULL, @id_user),
('WC', 'Limpar por cima do espelho', 'Semestral', 2, 5, 1, FALSE, NULL, @id_user),
('WC', 'Lavar caixotes do lixo', 'Semestral', 3, 10, 2, FALSE, NULL, @id_user),
('WC', 'Lavar cortina de banho', 'Mensal', 2, 5, 1, FALSE, NULL, @id_user);


-- Sala de estar
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Sala de estar', 'Arrumar objetos soltos', 'Diária', 2, 5, 1, FALSE, NULL, @id_user),
('Sala de estar', 'Aspirar o chão e os tapetes', 'Semanal', 3, 20, 3, FALSE, NULL, @id_user),
('Sala de estar', 'Lavar o chão', 'Semanal', 2, 20, 3, FALSE, NULL, @id_user),
('Sala de estar', 'Limpar o pó dos móveis e da televisão', 'Semanal', 3, 15, 1, FALSE, NULL, @id_user),
('Sala de estar', 'Aspirar o sofá', 'Mensal', 3, 15, 2, FALSE, NULL, @id_user),
('Sala de estar', 'Limpar interruptores e maçanetas', 'Mensal', 3, 5, 1, FALSE, NULL, @id_user),
('Sala de estar', 'Lavar as janelas por dentro', 'Mensal', 4, 20, 3, FALSE, NULL, @id_user),
('Sala de estar', 'Lavar capas de almofadas e mantas', 'Trimestral', 4, 20, 0, FALSE, NULL, @id_user),
('Sala de estar', 'Limpar o pó atrás e debaixo dos móveis', 'Semestral', 4, 30, 3, FALSE, NULL, @id_user),
('Sala de estar', 'Lavar as cortinas', 'Semestral', 4, 30, 2, FALSE, NULL, @id_user);

-- Sala de jantar
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Sala de jantar', 'Limpar o pó do aparador e dos móveis', 'Semanal', 3, 10, 1, FALSE, NULL, @id_user),
('Sala de jantar', 'Lavar o chão', 'Semanal', 2, 20, 2, FALSE, NULL, @id_user),
('Sala de jantar', 'Limpar as cadeiras (encostos e estofos)', 'Mensal', 3, 15, 2, FALSE, NULL, @id_user),
('Sala de jantar', 'Limpar os vidros do louceiro ou da vitrine', 'Mensal', 4, 15, 1, FALSE, NULL, @id_user),
('Sala de jantar', 'Limpar o candeeiro ou lustre', 'Trimestral', 4, 15, 3, FALSE, NULL, @id_user),
('Sala de jantar', 'Lavar as cortinas', 'Semestral', 4, 30, 0, FALSE, NULL, @id_user);

-- Cozinha
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Cozinha', 'Despejar o lixo e a reciclagem', 'Diária', 1, 5, 0, FALSE, NULL, @id_user),
('Cozinha', 'Aspirar o chão', 'Semanal', 1, 15, 2, FALSE, NULL, @id_user),
('Cozinha', 'Lavar o chão', 'Semanal', 1, 15, 2, FALSE, NULL, @id_user),
('Cozinha', 'Deitar fora comida fora de validade do frigorífico', 'Semanal', 1, 5, 0, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o exterior dos eletrodomésticos', 'Semanal', 3, 10, 1, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o micro-ondas por dentro', 'Semanal', 3, 5, 1, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o interior do frigorífico', 'Mensal', 3, 30, 2, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o forno', 'Mensal', 3, 30, 3, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o filtro da máquina de lavar loiça', 'Mensal', 3, 10, 1, FALSE, NULL, @id_user),
('Cozinha', 'Limpar o exaustor e os filtros', 'Trimestral', 3, 20, 3, FALSE, NULL, @id_user),
('Cozinha', 'Limpar os armários por dentro', 'Semestral', 4, 45, 2, FALSE, NULL, @id_user);

-- Quarto
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Quarto', 'Mudar os lençóis', 'Semanal', 1, 10, 1, FALSE, NULL, @id_user),
('Quarto', 'Aspirar o chão', 'Semanal', 2, 10, 2, FALSE, NULL, @id_user),
('Quarto', 'Limpar o pó dos móveis e das mesas de cabeceira', 'Semanal', 3, 10, 1, FALSE, NULL, @id_user),
('Quarto', 'Aspirar o colchão', 'Mensal', 3, 15, 2, FALSE, NULL, @id_user),
('Quarto', 'Limpar por baixo da cama', 'Mensal', 3, 15, 2, FALSE, NULL, @id_user),
('Quarto', 'Virar o colchão', 'Trimestral', 4, 15, 2, FALSE, NULL, @id_user),
('Quarto', 'Lavar almofadas e edredão', 'Semestral', 3, 20, 1, FALSE, NULL, @id_user);

-- Escritório
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Escritório', 'Limpar o pó da secretária e do monitor', 'Semanal', 3, 10, 1, FALSE, NULL, @id_user),
('Escritório', 'Limpar o teclado e o rato', 'Semanal', 3, 5, 0, FALSE, NULL, @id_user),
('Escritório', 'Esvaziar lixo', 'Semanal', 3, 5, 0, FALSE, NULL, @id_user),
('Escritório', 'Aspirar o chão', 'Semanal', 2, 15, 2, FALSE, NULL, @id_user),
('Escritório', 'Lavar o chão', 'Semanal', 2, 15, 2, FALSE, NULL, @id_user),
('Escritório', 'Organizar papéis e documentos', 'Mensal', 3, 30, 1, FALSE, NULL, @id_user),
('Escritório', 'Limpar o pó e os cabos atrás do computador', 'Trimestral', 4, 15, 1, FALSE, NULL, @id_user),
('Escritório', 'Triar documentos antigos', 'Anual', 4, 60, 2, FALSE, NULL, @id_user);

-- Lavandaria
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Lavandaria', 'Aspirar o chão', 'Semanal', 3, 3, 2, FALSE, NULL, @id_user),
('Lavandaria', 'Lavar o chão', 'Semanal', 3, 5, 2, FALSE, NULL, @id_user),
('Lavandaria', 'Limpar as superfícies', 'Semanal', 3, 2, 1, FALSE, NULL, @id_user),
('Lavandaria', 'Limpar o filtro da máquina de secar', 'Semanal', 2, 5, 0, FALSE, NULL, @id_user),
('Lavandaria', 'Limpar a gaveta do detergente e a borracha da porta', 'Mensal', 3, 10, 1, FALSE, NULL, @id_user),
('Lavandaria', 'Fazer um ciclo de limpeza do tambor da máquina da roupa', 'Trimestral', 3, 5, 0, FALSE, NULL, @id_user),
('Lavandaria', 'Limpar o filtro da máquina de lavar', 'Trimestral', 3, 15, 2, FALSE, NULL, @id_user),
('Lavandaria', 'Limpar atrás e debaixo das máquinas', 'Semestral', 4, 20, 2, FALSE, NULL, @id_user);

-- Dispensa
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Dispensa', 'Verificar as datas de validade dos alimentos', 'Trimestral', 1, 15, 0, FALSE, NULL, @id_user),
('Dispensa', 'Organizar e repor as prateleiras', 'Mensal', 3, 30, 1, FALSE, NULL, @id_user),
('Dispensa', 'Lavar o chão', 'Mensal', 3, 15, 2, FALSE, NULL, @id_user),
('Dispensa', 'Limpar as prateleiras por dentro', 'Semestral', 3, 30, 2, FALSE, NULL, @id_user);


-- Garagem
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Garagem', 'Varrer o chão da garagem', 'Semanal', 3, 15, 1, FALSE, NULL, @id_user),
('Garagem', 'Arrumar bicicletas e equipamento desportivo', 'Semanal', 4, 15, 1, FALSE, NULL, @id_user),
('Garagem', 'Verificar a pressão dos pneus (carro e bicicletas)', 'Mensal', 1, 10, 0, FALSE, NULL, @id_user),
('Garagem', 'Verificar os níveis de óleo e água do limpa-vidros', 'Mensal', 1, 10, 0, FALSE, NULL, @id_user),
('Garagem', 'Aspirar o interior do carro', 'Mensal', 2, 30, 2, FALSE, NULL, @id_user),
('Garagem', 'Lavar o exterior do carro', 'Mensal', 3, 60, 3, FALSE, NULL, @id_user),
('Garagem', 'Organizar a caixa de ferramentas', 'Mensal', 4, 20, 1, FALSE, NULL, @id_user),
('Garagem', 'Deitar fora caixas de cartão e lixo acumulado', 'Mensal', 2, 15, 2, FALSE, NULL, @id_user),
('Garagem', 'Limpar o pó das prateleiras de arrumação', 'Trimestral', 4, 45, 1, FALSE, NULL, @id_user),
('Garagem', 'Carregar baterias de ferramentas elétricas', 'Trimestral', 3, 5, 0, FALSE, NULL, @id_user),
('Garagem', 'Lavar e secar os tapetes do carro', 'Trimestral', 3, 20, 2, FALSE, NULL, @id_user),
('Garagem', 'Limpar manchas de óleo ou sujidade incrustada no chão', 'Semestral', 3, 30, 3, FALSE, NULL, @id_user),
('Garagem', 'Lubrificar as calhas e dobradiças do portão da garagem', 'Anual', 2, 15, 1, FALSE, NULL, @id_user),
('Garagem', 'Fazer a triagem de tralha para doar ou deitar fora', 'Anual', 4, 120, 3, FALSE, NULL, @id_user);

-- Jardim
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Jardim', 'Regar as plantas e os vasos manuais', 'Diária', 1, 15, 0, FALSE, NULL, @id_user),
('Jardim', 'Verificar e ajustar o sistema de rega automática', 'Mensal', 1, 10, 0, FALSE, NULL, @id_user),
('Jardim', 'Cortar a relva', 'Quinzenal', 2, 60, 3, FALSE, NULL, @id_user),
('Jardim', 'Arrancar ervas daninhas dos canteiros', 'Semanal', 3, 30, 2, FALSE, NULL, @id_user),
('Jardim', 'Varrer os caminhos e pátio exterior', 'Semanal', 3, 20, 1, FALSE, NULL, @id_user),
('Jardim', 'Verificar plantas por sinais de pragas (pulgões, formigas)', 'Semanal', 1, 10, 0, FALSE, NULL, @id_user),
('Jardim', 'Apanhar folhas secas do relvado', 'Mensal', 4, 45, 2, FALSE, NULL, @id_user),
('Jardim', 'Aplicar fertilizante/adubo na relva e plantas', 'Trimestral', 2, 30, 1, FALSE, NULL, @id_user),
('Jardim', 'Limpar o mobiliário de exterior', 'Mensal', 4, 25, 1, FALSE, NULL, @id_user),
('Jardim', 'Podar arbustos e sebes', 'Semestral', 3, 90, 3, FALSE, NULL, @id_user),
('Jardim', 'Plantar flores ou bolbos da época', 'Semestral', 4, 60, 2, FALSE, NULL, @id_user),
('Jardim', 'Limpar, afiar e lubrificar ferramentas de jardinagem', 'Anual', 4, 30, 1, FALSE, NULL, @id_user);

-- Escadas
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Escadas', 'Recolher objetos soltos nos degraus', 'Diária', 1, 2, 0, FALSE, NULL, @id_user),
('Escadas', 'Desinfetar e limpar o corrimão', 'Semanal', 1, 5, 0, FALSE, NULL, @id_user),
('Escadas', 'Varrer os degraus e os patamares', 'Semanal', 2, 10, 1, FALSE, NULL, @id_user),
('Escadas', 'Aspirar tapetes ou alcatifa das escadas', 'Semanal', 2, 15, 2, FALSE, NULL, @id_user),
('Escadas', 'Lavar os degraus com a esfregona', 'Semanal', 2, 15, 2, FALSE, NULL, @id_user),
('Escadas', 'Limpar o pó dos rodapés e balaústres (grades)', 'Mensal', 4, 20, 2, FALSE, NULL, @id_user),
('Escadas', 'Limpar os interruptores de luz e apliques de parede', 'Mensal', 3, 5, 0, FALSE, NULL, @id_user),
('Escadas', 'Remover teias de aranha dos tetos e cantos altos', 'Mensal', 4, 10, 1, FALSE, NULL, @id_user),
('Escadas', 'Verificar iluminação e substituir lâmpadas fundidas', 'Mensal', 1, 5, 0, FALSE, NULL, @id_user),
('Escadas', 'Lavar os vidros da janela do vão das escadas', 'Trimestral', 4, 20, 2, FALSE, NULL, @id_user),
('Escadas', 'Encerar ou aplicar produto de tratamento na madeira', 'Anual', 4, 45, 3, FALSE, NULL, @id_user);

-- Varanda
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Varanda', 'Verificar e desobstruir o ralo de escoamento', 'Mensal', 1, 5, 1, FALSE, NULL, @id_user),
('Varanda', 'Regar os vasos de plantas', 'Diária', 1, 5, 0, FALSE, NULL, @id_user),
('Varanda', 'Despejar cinzeiros e apanhar pequeno lixo', 'Diária', 1, 2, 0, FALSE, NULL, @id_user),
('Varanda', 'Varrer o chão da varanda', 'Semanal', 2, 10, 1, FALSE, NULL, @id_user),
('Varanda', 'Limpar dejetos de pássaros (se houver)', 'Semanal', 2, 10, 2, FALSE, NULL, @id_user),
('Varanda', 'Tirar folhas secas dos vasos e varrer terra solta', 'Semanal', 3, 5, 0, FALSE, NULL, @id_user),
('Varanda', 'Limpar a mesa e cadeiras de exterior', 'Semanal', 3, 10, 1, FALSE, NULL, @id_user),
('Varanda', 'Lavar o chão da varanda a balde ou esfregona', 'Quinzenal', 3, 15, 2, FALSE, NULL, @id_user),
('Varanda', 'Limpar os vidros ou as guardas/grades', 'Mensal', 4, 30, 3, FALSE, NULL, @id_user),
('Varanda', 'Lavar os tapetes de exterior', 'Trimestral', 4, 20, 2, FALSE, NULL, @id_user),
('Varanda', 'Limpar o pó de interruptores e candeeiros de exterior', 'Trimestral', 4, 5, 1, FALSE, NULL, @id_user);

-- Marquise
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Marquise', 'Abrir as janelas para arejar e evitar condensação/humidade', 'Diária', 1, 2, 0, FALSE, NULL, @id_user),
('Marquise', 'Limpar a condensação dos vidros (especialmente no inverno)', 'Diária', 2, 5, 1, FALSE, NULL, @id_user),
('Marquise', 'Estender ou recolher a roupa do estendal', 'Semanal', 1, 15, 1, FALSE, NULL, @id_user),
('Marquise', 'Despejar os caixotes da reciclagem (se guardados na marquise)', 'Semanal', 1, 5, 1, FALSE, NULL, @id_user),
('Marquise', 'Varrer o chão e apanhar cotão da roupa', 'Semanal', 2, 10, 1, FALSE, NULL, @id_user),
('Marquise', 'Limpar o pó do estendal, parapeitos e prateleiras', 'Quinzenal', 3, 10, 1, FALSE, NULL, @id_user),
('Marquise', 'Lavar o chão com a esfregona', 'Quinzenal', 3, 15, 2, FALSE, NULL, @id_user),
('Marquise', 'Limpar as calhas das janelas deslizantes', 'Mensal', 3, 20, 2, FALSE, NULL, @id_user),
('Marquise', 'Organizar a despensa extra ou armário das vassouras', 'Mensal', 4, 30, 2, FALSE, NULL, @id_user),
('Marquise', 'Lavar os vidros por dentro e por fora', 'Trimestral', 4, 60, 3, FALSE, NULL, @id_user),
('Marquise', 'Lavar a fundo os estores ou persianas', 'Semestral', 4, 60, 3, FALSE, NULL, @id_user);

-- Piscina
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, concluido, ultima_conclusao, id_user) VALUES
('Piscina', 'Retirar folhas e insetos da superfície com o xalavar (rede)', 'Diária', 1, 10, 1, FALSE, NULL, @id_user),
('Piscina', 'Esvaziar os cestos dos skimmers', 'Semanal', 1, 5, 0, FALSE, NULL, @id_user),
('Piscina', 'Testar os níveis de pH e cloro da água', 'Semanal', 1, 5, 0, FALSE, NULL, @id_user),
('Piscina', 'Ajustar químicos (adicionar cloro, redutor/elevador de pH)', 'Semanal', 1, 10, 1, FALSE, NULL, @id_user),
('Piscina', 'Aspirar o fundo da piscina (manualmente)', 'Semanal', 2, 45, 2, FALSE, NULL, @id_user),
('Piscina', 'Escovar as paredes e a linha de água', 'Semanal', 2, 30, 3, FALSE, NULL, @id_user),
('Piscina', 'Limpar a área circundante (deck ou pavimento) da piscina', 'Semanal', 3, 20, 2, FALSE, NULL, @id_user),
('Piscina', 'Fazer a lavagem (backwash) do filtro de areia e enxaguamento', 'Quinzenal', 2, 15, 1, FALSE, NULL, @id_user),
('Piscina', 'Verificar a pressão do manómetro do filtro e inspecionar a bomba', 'Mensal', 2, 5, 0, FALSE, NULL, @id_user),
('Piscina', 'Limpar o pré-filtro da bomba na casa das máquinas', 'Mensal', 2, 10, 1, FALSE, NULL, @id_user),
('Piscina', 'Lavar a cobertura/lona da piscina', 'Trimestral', 4, 30, 2, FALSE, NULL, @id_user),
('Piscina', 'Preparar a piscina para o inverno (invernar) ou abrir para o verão', 'Anual', 4, 120, 3, FALSE, NULL, @id_user);
