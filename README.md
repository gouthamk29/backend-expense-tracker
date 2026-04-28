# 💰 Expense Tracker API (Node.js + JWT + MongoDB)

A simple and secure Expense Tracker backend built with **Node.js, Express, MongoDB, and JWT authentication**.  
This API allows users to register, login, and manage their personal expenses with full CRUD support.

---

## 🚀 Features

- User authentication (Register / Login)
- JWT-based protected routes
- Add / Update / Delete expenses
- Filter expenses by category or date
- MongoDB database integration
- Secure password hashing using bcrypt
- RESTful API structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt.js


## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/expense-tracker-api.git
cd expense-tracker-api
```

2. Install dependencies
```bash
npm install
```

3. Create .env file
```
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server
```bash
npm run dev
```

Server will run on:
http://localhost:9000


## 🔐 Authentication Flow
User registers → receives account
User logs in → receives JWT token
Token is sent in headers:
Authorization: Bearer <token>
Protected routes validate token before access

## 📌 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint              | Description       |
|--------|----------------------|------------------|
| POST   | /api/auth/register   | Register user     |
| POST   | /api/auth/login      | Login user        |

---

### 💸 Expense Routes (Protected)

| Method | Endpoint             | Description        |
|--------|---------------------|-------------------|
| GET    | /api/expenses       | Get all expenses  |
| POST   | /api/expenses       | Add new expense   |
| DELETE | /api/expenses/:id   | Delete expense    |

## 🧪 Example Expense JSON
{
  "title": "Groceries",
  "amount": 1200,
  "category": "Food",
  "date": "2026-04-29"
}


## 🔒 Security Notes
Passwords are hashed using bcrypt
JWT tokens expire for security
Protected routes require valid token
Input validation recommended before production

## 👨‍💻 Author
Goutham

## 📜 License
This project is open-source and available under the MIT License.
