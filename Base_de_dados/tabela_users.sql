-- ============================================
-- Base de dados: users
-- ============================================

DROP DATABASE IF EXISTS bd_tarefas;

CREATE DATABASE IF NOT EXISTS bd_tarefas
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE bd_tarefas;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_utilizador VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL 
);