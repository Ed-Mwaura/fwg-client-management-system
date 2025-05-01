# Client Management System

A simple client management web application with a **React + Vite** frontend and a **plain Node.js** backend.

---

## 📁 Project Structure

```
client-management-system/
│
├── frontend/   # React + Vite frontend
└── backend/    # Plain Node.js backend
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd client-management-system
```

### 2. Install dependencies

> ⚠️ The frontend and backend have separate `package.json` files. You must install dependencies in both folders.

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

## 🖥️ Running the Application

### Start the Backend Server

```bash
cd backend
npm start
```

The server will start on [http://localhost:5000](http://localhost:5000)

---

### Start the Frontend (React + Vite)

```bash
cd frontend
npm run dev
```

The app will be available at the URL  [http://localhost:5173](http://localhost:5173)

---

## 🔧 Features

- View list of customers
- Add a new customer
- Delete a customer
- View detailed customer information
- Resets customer data on backend server restart. This is the list of the 10 provided customers.

---

## 📦 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Plain Node.js
- **State Management:** React Context API
```
