-- ============================================
-- Base de dados: tarefas
-- ============================================

DROP DATABASE IF EXISTS tarefas;

CREATE DATABASE IF NOT EXISTS tarefas
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE tarefas;

-- Tabela única: a divisão da casa passa a ser uma coluna
CREATE TABLE IF NOT EXISTS tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    divisao VARCHAR(50) NOT NULL COMMENT 'divisão da casa a que pertence a tarefa',
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia',
    nao_concluido BOOLEAN NOT NULL DEFAULT TRUE COMMENT 'TRUE = por concluir, FALSE = concluída',
    ultima_conclusao DATE NULL DEFAULT NULL COMMENT 'data da última conclusão (vazio por agora)'
);

-- WC
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('WC', 'Aspirar chão', 'Semanal', 1, 5, 2, TRUE, NULL),
('WC', 'Lavar chão', 'Semanal', 1, 8, 2, TRUE, NULL),
('WC', 'Lavar louças de casa de banho', 'Semanal', 1, 12, 2, TRUE, NULL),
('WC', 'Colocar lixívia na sanita', 'Semanal', 3, 2, 0, TRUE, NULL),
('WC', 'Limpar espelhos', 'Semanal', 1, 3, 1, TRUE, NULL),
('WC', 'Mudar lixo', 'Semanal', 1, 2, 0, TRUE, NULL),
('WC', 'Trocar areias dos gatos', 'Semanal', 1, 5, 1, TRUE, NULL),
('WC', 'Substituir tapete e toalhas', 'Semanal', 1, 2, 0, TRUE, NULL),
('WC', 'Limpar piaçaba e pousador', 'Semanal', 1, 2, 1, TRUE, NULL),
('WC', 'Limpar paredes', 'Semanal', 3, 15, 3, TRUE, NULL),
('WC', 'Limpar tetos com lixívia', 'Mensal', 1, 15, 3, TRUE, NULL),
('WC', 'Lavar janelas por dentro', 'Mensal', 2, 10, 2, TRUE, NULL),
('WC', 'Limpar juntas dos azulejos', 'Semestral', 3, 20, 3, TRUE, NULL),
('WC', 'Limpar armários interior', 'Semestral', 2, 10, 1, TRUE, NULL),
('WC', 'Verificar datas de validade dos medicamentos', 'Semestral', 1, 5, 0, TRUE, NULL),
('WC', 'Limpar em baixo do armário', 'Semestral', 1, 5, 1, TRUE, NULL),
('WC', 'Limpar por cima do espelho', 'Semestral', 2, 5, 1, TRUE, NULL),
('WC', 'Lavar caixotes do lixo', 'Semestral', 3, 10, 2, TRUE, NULL),
('WC', 'Lavar cortina de banho', 'Mensal', 2, 5, 1, TRUE, NULL);

-- Arrumos
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Arrumos', 'Lavar a loiça', 'Diária', 1, 15, 1, TRUE, NULL),
('Arrumos', 'Fazer a cama', 'Diária', 2, 5, 0, TRUE, NULL),
('Arrumos', 'Limpar a bancada da cozinha', 'Diária', 2, 10, 0, TRUE, NULL),
('Arrumos', 'Aspirar a casa toda', 'Semanal', 2, 40, 2, TRUE, NULL),
('Arrumos', 'Lavar o chão da cozinha e casa de banho', 'Semanal', 1, 30, 3, TRUE, NULL),
('Arrumos', 'Limpar o pó dos móveis', 'Semanal', 3, 20, 1, TRUE, NULL),
('Arrumos', 'Limpar a fundo a casa de banho', 'Semanal', 1, 45, 3, TRUE, NULL),
('Arrumos', 'Tratar da roupa (lavar e estender)', 'Semanal', 1, 30, 2, TRUE, NULL),
('Arrumos', 'Passar a ferro', 'Semanal', 4, 60, 2, TRUE, NULL),
('Arrumos', 'Arrumar a secretária de trabalho', 'Diária', 3, 10, 0, TRUE, NULL),
('Arrumos', 'Limpar o interior do frigorífico', 'Mensal', 4, 45, 2, TRUE, NULL),
('Arrumos', 'Lavar as janelas', 'Mensal', 4, 90, 3, TRUE, NULL),
('Arrumos', 'Organizar a despensa', 'Mensal', 3, 30, 1, TRUE, NULL),
('Arrumos', 'Mudar os lençóis da cama', 'Semanal', 1, 10, 1, TRUE, NULL),
('Arrumos', 'Despejar o lixo e reciclagem', 'Diária', 1, 5, 0, TRUE, NULL);

-- Garagem
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Garagem', 'Varrer o chão da garagem', 'Semanal', 3, 15, 1, TRUE, NULL),
('Garagem', 'Arrumar bicicletas e equipamento desportivo', 'Semanal', 4, 15, 1, TRUE, NULL),
('Garagem', 'Verificar a pressão dos pneus (carro e bicicletas)', 'Mensal', 1, 10, 0, TRUE, NULL),
('Garagem', 'Verificar os níveis de óleo e água do limpa-vidros', 'Mensal', 1, 10, 0, TRUE, NULL),
('Garagem', 'Aspirar o interior do carro', 'Mensal', 2, 30, 2, TRUE, NULL),
('Garagem', 'Lavar o exterior do carro', 'Mensal', 3, 60, 3, TRUE, NULL),
('Garagem', 'Organizar a caixa de ferramentas', 'Mensal', 4, 20, 1, TRUE, NULL),
('Garagem', 'Deitar fora caixas de cartão e lixo acumulado', 'Mensal', 2, 15, 2, TRUE, NULL),
('Garagem', 'Limpar o pó das prateleiras de arrumação', 'Trimestral', 4, 45, 1, TRUE, NULL),
('Garagem', 'Carregar baterias de ferramentas elétricas', 'Trimestral', 3, 5, 0, TRUE, NULL),
('Garagem', 'Lavar e secar os tapetes do carro', 'Trimestral', 3, 20, 2, TRUE, NULL),
('Garagem', 'Limpar manchas de óleo ou sujidade incrustada no chão', 'Semestral', 3, 30, 3, TRUE, NULL),
('Garagem', 'Lubrificar as calhas e dobradiças do portão da garagem', 'Anual', 2, 15, 1, TRUE, NULL),
('Garagem', 'Fazer a triagem de tralha para doar ou deitar fora', 'Anual', 4, 120, 3, TRUE, NULL);

-- Jardim
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Jardim', 'Regar as plantas e os vasos manuais', 'Diária', 1, 15, 0, TRUE, NULL),
('Jardim', 'Verificar e ajustar o sistema de rega automática', 'Mensal', 1, 10, 0, TRUE, NULL),
('Jardim', 'Cortar a relva', 'Quinzenal', 2, 60, 3, TRUE, NULL),
('Jardim', 'Arrancar ervas daninhas dos canteiros', 'Semanal', 3, 30, 2, TRUE, NULL),
('Jardim', 'Varrer os caminhos e pátio exterior', 'Semanal', 3, 20, 1, TRUE, NULL),
('Jardim', 'Verificar plantas por sinais de pragas (pulgões, formigas)', 'Semanal', 1, 10, 0, TRUE, NULL),
('Jardim', 'Apanhar folhas secas do relvado', 'Mensal', 4, 45, 2, TRUE, NULL),
('Jardim', 'Aplicar fertilizante/adubo na relva e plantas', 'Trimestral', 2, 30, 1, TRUE, NULL),
('Jardim', 'Limpar o mobiliário de exterior', 'Mensal', 4, 25, 1, TRUE, NULL),
('Jardim', 'Podar arbustos e sebes', 'Semestral', 3, 90, 3, TRUE, NULL),
('Jardim', 'Plantar flores ou bolbos da época', 'Semestral', 4, 60, 2, TRUE, NULL),
('Jardim', 'Limpar, afiar e lubrificar ferramentas de jardinagem', 'Anual', 4, 30, 1, TRUE, NULL);

-- Escadas
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Escadas', 'Recolher objetos soltos nos degraus', 'Diária', 1, 2, 0, TRUE, NULL),
('Escadas', 'Desinfetar e limpar o corrimão', 'Semanal', 1, 5, 0, TRUE, NULL),
('Escadas', 'Varrer os degraus e os patamares', 'Semanal', 2, 10, 1, TRUE, NULL),
('Escadas', 'Aspirar tapetes ou alcatifa das escadas', 'Semanal', 2, 15, 2, TRUE, NULL),
('Escadas', 'Lavar os degraus com a esfregona', 'Semanal', 2, 15, 2, TRUE, NULL),
('Escadas', 'Limpar o pó dos rodapés e balaústres (grades)', 'Mensal', 4, 20, 2, TRUE, NULL),
('Escadas', 'Limpar os interruptores de luz e apliques de parede', 'Mensal', 3, 5, 0, TRUE, NULL),
('Escadas', 'Remover teias de aranha dos tetos e cantos altos', 'Mensal', 4, 10, 1, TRUE, NULL),
('Escadas', 'Verificar iluminação e substituir lâmpadas fundidas', 'Mensal', 1, 5, 0, TRUE, NULL),
('Escadas', 'Lavar os vidros da janela do vão das escadas', 'Trimestral', 4, 20, 2, TRUE, NULL),
('Escadas', 'Encerar ou aplicar produto de tratamento na madeira', 'Anual', 4, 45, 3, TRUE, NULL);

-- Varanda
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Varanda', 'Verificar e desobstruir o ralo de escoamento', 'Mensal', 1, 5, 1, TRUE, NULL),
('Varanda', 'Regar os vasos de plantas', 'Diária', 1, 5, 0, TRUE, NULL),
('Varanda', 'Despejar cinzeiros e apanhar pequeno lixo', 'Diária', 1, 2, 0, TRUE, NULL),
('Varanda', 'Varrer o chão da varanda', 'Semanal', 2, 10, 1, TRUE, NULL),
('Varanda', 'Limpar dejetos de pássaros (se houver)', 'Semanal', 2, 10, 2, TRUE, NULL),
('Varanda', 'Tirar folhas secas dos vasos e varrer terra solta', 'Semanal', 3, 5, 0, TRUE, NULL),
('Varanda', 'Limpar a mesa e cadeiras de exterior', 'Semanal', 3, 10, 1, TRUE, NULL),
('Varanda', 'Lavar o chão da varanda a balde ou esfregona', 'Quinzenal', 3, 15, 2, TRUE, NULL),
('Varanda', 'Limpar os vidros ou as guardas/grades', 'Mensal', 4, 30, 3, TRUE, NULL),
('Varanda', 'Lavar os tapetes de exterior', 'Trimestral', 4, 20, 2, TRUE, NULL),
('Varanda', 'Limpar o pó de interruptores e candeeiros de exterior', 'Trimestral', 4, 5, 1, TRUE, NULL);

-- Marquise
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Marquise', 'Abrir as janelas para arejar e evitar condensação/humidade', 'Diária', 1, 2, 0, TRUE, NULL),
('Marquise', 'Limpar a condensação dos vidros (especialmente no inverno)', 'Diária', 2, 5, 1, TRUE, NULL),
('Marquise', 'Estender ou recolher a roupa do estendal', 'Semanal', 1, 15, 1, TRUE, NULL),
('Marquise', 'Despejar os caixotes da reciclagem (se guardados na marquise)', 'Semanal', 1, 5, 1, TRUE, NULL),
('Marquise', 'Varrer o chão e apanhar cotão da roupa', 'Semanal', 2, 10, 1, TRUE, NULL),
('Marquise', 'Limpar o pó do estendal, parapeitos e prateleiras', 'Quinzenal', 3, 10, 1, TRUE, NULL),
('Marquise', 'Lavar o chão com a esfregona', 'Quinzenal', 3, 15, 2, TRUE, NULL),
('Marquise', 'Limpar as calhas das janelas deslizantes', 'Mensal', 3, 20, 2, TRUE, NULL),
('Marquise', 'Organizar a despensa extra ou armário das vassouras', 'Mensal', 4, 30, 2, TRUE, NULL),
('Marquise', 'Lavar os vidros por dentro e por fora', 'Trimestral', 4, 60, 3, TRUE, NULL),
('Marquise', 'Lavar a fundo os estores ou persianas', 'Semestral', 4, 60, 3, TRUE, NULL);

-- Piscina
INSERT INTO tarefas (divisao, tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia, nao_concluido, ultima_conclusao) VALUES
('Piscina', 'Retirar folhas e insetos da superfície com o xalavar (rede)', 'Diária', 1, 10, 1, TRUE, NULL),
('Piscina', 'Esvaziar os cestos dos skimmers', 'Semanal', 1, 5, 0, TRUE, NULL),
('Piscina', 'Testar os níveis de pH e cloro da água', 'Semanal', 1, 5, 0, TRUE, NULL),
('Piscina', 'Ajustar químicos (adicionar cloro, redutor/elevador de pH)', 'Semanal', 1, 10, 1, TRUE, NULL),
('Piscina', 'Aspirar o fundo da piscina (manualmente)', 'Semanal', 2, 45, 2, TRUE, NULL),
('Piscina', 'Escovar as paredes e a linha de água', 'Semanal', 2, 30, 3, TRUE, NULL),
('Piscina', 'Limpar a área circundante (deck ou pavimento) da piscina', 'Semanal', 3, 20, 2, TRUE, NULL),
('Piscina', 'Fazer a lavagem (backwash) do filtro de areia e enxaguamento', 'Quinzenal', 2, 15, 1, TRUE, NULL),
('Piscina', 'Verificar a pressão do manómetro do filtro e inspecionar a bomba', 'Mensal', 2, 5, 0, TRUE, NULL),
('Piscina', 'Limpar o pré-filtro da bomba na casa das máquinas', 'Mensal', 2, 10, 1, TRUE, NULL),
('Piscina', 'Lavar a cobertura/lona da piscina', 'Trimestral', 4, 30, 2, TRUE, NULL),
('Piscina', 'Preparar a piscina para o inverno (invernar) ou abrir para o verão', 'Anual', 4, 120, 3, TRUE, NULL);

