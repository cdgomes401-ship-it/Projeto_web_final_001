use tarefas;

INSERT INTO Garagem (tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia) 
VALUES
    ('Varrer o chão da garagem', 'Semanal', 3, 15, 1),
    ('Arrumar bicicletas e equipamento desportivo', 'Semanal', 4, 15, 1),
    ('Verificar a pressão dos pneus (carro e bicicletas)', 'Mensal', 1, 10, 0),
    ('Verificar os níveis de óleo e água do limpa-vidros', 'Mensal', 1, 10, 0),
    ('Aspirar o interior do carro', 'Mensal', 2, 30, 2),
    ('Lavar o exterior do carro', 'Mensal', 3, 60, 3),
    ('Organizar a caixa de ferramentas', 'Mensal', 4, 20, 1),
    ('Deitar fora caixas de cartão e lixo acumulado', 'Mensal', 2, 15, 2),
    ('Limpar o pó das prateleiras de arrumação', 'Trimestral', 4, 45, 1),
    ('Carregar baterias de ferramentas elétricas', 'Trimestral', 3, 5, 0),
    ('Lavar e secar os tapetes do carro', 'Trimestral', 3, 20, 2),
    ('Limpar manchas de óleo ou sujidade incrustada no chão', 'Semestral', 3, 30, 3),
    ('Lubrificar as calhas e dobradiças do portão da garagem', 'Anual', 2, 15, 1),
    ('Fazer a triagem de tralha para doar ou deitar fora', 'Anual', 4, 120, 3);