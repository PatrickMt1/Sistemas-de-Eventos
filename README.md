# Projeto Full Stack - Java (Backend) & React + Vite (Frontend)

Este projeto é uma aplicação web full stack composta por um backend desenvolvido em **Java** e um frontend construído com **React** utilizando **Vite** como bundler.

## 📌 Descrição
O sistema é dividido em duas partes principais:
- **Backend:** Implementado em Java, fornece uma API RESTful para comunicação com o frontend, gerenciando dados e aplicando regras de negócio.
- **Frontend:** Construído com React e Vite, oferece uma interface moderna e responsiva para interação com os usuários.

## 🚀 Funcionalidades
- CRUD completo de recursos.
- Comunicação entre frontend e backend via requisições HTTP (JSON).
- Estrutura modular para fácil manutenção e expansão.


## 📦 Tecnologias Utilizadas
### Backend (Java)
- Java 17+
- Spring Boot
- Maven
- JPA / Hibernate (para persistência de dados)
- Banco de dados para teste (H2 Database)
- Banco de dados relacional (MySQL / PostgreSQL)

### Frontend (React + Vite)
- React 18+
- Vite
- Axios (para requisições HTTP)
- Tailwind CSS (para estilização)
- Zustand (Biblioteca de estado)

## 🔑 Como executar o projeto
### Backend
1. Acesse o diretório `backend`:
```bash
cd backend
```
2. Compile e execute o projeto:
```bash
mvn spring-boot:run
```

### Frontend
1. Acesse o diretório `frontend`:
```bash
cd frontend
```
2. Instale as dependências:
```bash
npm install
```
3. Execute o projeto:
```bash
npm run dev
```

O frontend estará disponível por padrão em `http://localhost:5173` e o backend em `http://localhost:8080`.

## 📖 Referências
- [Documentação do Spring Boot](https://spring.io/projects/spring-boot)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)

