
# 📘 React CRUD Project

Welcome to a simple full-stack CRUD application developed with React and Node.js.  
This app is intended for practice and learning purposes.

Follow the steps below to set up and run the project locally.

---

## 📋 Requirements

Make sure you have these installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

---

## 🛠️ Local Setup Guide

### 🔁 Step 1: Clone the Project

Open your terminal and run the following commands:

```bash
git clone https://github.com/giuseppefilippin/CRUD-TRABALHO.git
cd CRUD-TRABALHO
```

---

### 🚀 Step 2: Set Up the Backend

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
npm start
```

#### 🗄️ Database Settings

Before starting the backend, set your database credentials.  
Edit the file located at `backend/Routes/db.js`:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "YOUR_DB_USER",
  password: "YOUR_DB_PASSWORD",
  database: "YOUR_DB_NAME"
});
```

> Backend server will run on: `http://localhost:8800`

---

### 🌐 Step 3: Run the Frontend

In a new terminal window, move to the frontend directory:

```bash
cd frontend
npm install
npm start
```

> Frontend should open automatically at: `http://localhost:3000`

---

## 🚦 Application Running

Once both the backend and frontend are running, access the app via:

```
http://localhost:3000
```

The client will communicate with the API at:

```
http://localhost:8800
```

---

## 👨‍💻 Developer

Built with :fire: by Johan Stromberg

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Portfolio](https://img.shields.io/badge/Portfolio-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/giuseppefilippin)

---

### 🚧 Under Development

This project is still being improved — stay tuned for updates!
