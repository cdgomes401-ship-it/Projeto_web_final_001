-- ============================================
-- Base de dados: tarefas_wc
-- Tarefas da secção "WC"
-- ============================================
DROP DATABASE IF EXISTS tarefas;
 
CREATE DATABASE IF NOT EXISTS tarefas
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
 
USE tarefas;
 
CREATE TABLE IF NOT EXISTS WC (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE Arrumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Garagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Jardim (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Escadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Varanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Marquise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);
CREATE TABLE IF NOT EXISTS Piscina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    frequencia VARCHAR(50) NOT NULL,
    prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
    tempo_estimado_min INT NOT NULL COMMENT 'minutos',
    nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia'
);




INSERT INTO wc (tarefa, frequencia, prioridade, tempo_estimado_min, nivel_energia) VALUES
('Aspirar chão', 'Semanal', 1, 5, 2),
('Lavar chão', 'Semanal', 1, 8, 2),
('Lavar louças de casa de banho', 'Semanal', 1, 12, 2),
('Colocar lixívia na sanita', 'Semanal', 3, 2, 0),
('Limpar espelhos', 'Semanal', 1, 3, 1),
('Mudar lixo', 'Semanal', 1, 2, 0),
('Trocar areias dos gatos', 'Semanal', 1, 5, 1),
('Substituir tapete e toalhas', 'Semanal', 1, 2, 0),
('Limpar piaçaba e pousador', 'Semanal', 1, 2, 1),
('Limpar paredes', 'Semanal', 3, 15, 3),
('Limpar tetos com lixívia', 'Mensal', 1, 15, 3),
('Lavar janelas por dentro', 'Mensal', 2, 10, 2),
('Limpar juntas dos azulejos', 'Semestral', 3, 20, 3),
('Limpar armários interior', 'Semestral', 2, 10, 1),
('Verificar datas de validade dos medicamentos', 'Semestral', 1, 5, 0),
('Limpar em baixo do armário', 'Semestral', 1, 5, 1),
('Limpar por cima do espelho', 'Semestral', 2, 5, 1),
('Lavar caixotes do lixo', 'Semestral', 3, 10, 2),
('Lavar cortina de banho', 'Mensal', 2, 5, 1);