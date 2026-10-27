use tarefas;

INSERT INTO Piscina (tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia) 
VALUES
    ('Retirar folhas e insetos da superfície com o xalavar (rede)', 'Diária', 1, 10, 1),
    ('Esvaziar os cestos dos skimmers', 'Semanal', 1, 5, 0),
    ('Testar os níveis de pH e cloro da água', 'Semanal', 1, 5, 0),
    ('Ajustar químicos (adicionar cloro, redutor/elevador de pH)', 'Semanal', 1, 10, 1),
    ('Aspirar o fundo da piscina (manualmente)', 'Semanal', 2, 45, 2),
    ('Escovar as paredes e a linha de água', 'Semanal', 2, 30, 3),
    ('Limpar a área circundante (deck ou pavimento) da piscina', 'Semanal', 3, 20, 2),
    ('Fazer a lavagem (backwash) do filtro de areia e enxaguamento', 'Quinzenal', 2, 15, 1),
    ('Verificar a pressão do manómetro do filtro e inspecionar a bomba', 'Mensal', 2, 5, 0),
    ('Limpar o pré-filtro da bomba na casa das máquinas', 'Mensal', 2, 10, 1),
    ('Lavar a cobertura/lona da piscina', 'Trimestral', 4, 30, 2),
    ('Preparar a piscina para o inverno (invernar) ou abrir para o verão', 'Anual', 4, 120, 3);