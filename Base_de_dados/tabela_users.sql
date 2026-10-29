-- ============================================
-- Base de dados: users
-- ============================================

DROP DATABASE IF EXISTS users;

CREATE DATABASE IF NOT EXISTS users
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE users;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_utilizador VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL 
);