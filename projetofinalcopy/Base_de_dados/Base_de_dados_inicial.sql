-- Base de dados: tarefas
-- ============================================

DROP DATABASE IF EXISTS bd_tarefas;

CREATE DATABASE IF NOT EXISTS bd_tarefas
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE bd_tarefas;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_utilizador VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Tabela única: a divisão da casa passa a ser uma coluna
CREATE TABLE IF NOT EXISTS tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    divisao VARCHAR(50) NOT NULL COMMENT 'divisão da casa a que pertence a tarefa',
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia',
    concluido BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'FALSE = por concluir, TRUE = concluída',
    ultima_conclusao DATE NULL DEFAULT NULL COMMENT 'data da última conclusão (vazio por agora)',
    id_user int,
	foreign key(id_user)
	references users(id)
);