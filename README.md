# 🏆 Real-Time Leaderboard System

A modern, responsive leaderboard application with real-time updates, built with React, Node.js, and Socket.io. Features a beautiful mobile-first UI with smooth animations and instant notifications.

---

## ✨ Live Demo

* **Frontend**: [View on Vercel](https://your-vercel-url.com)
* **Backend**: [View on Railway](https://your-railway-url.com)

---

## 🚀 Features

### Core Functionality

* **Real-time leaderboard** updates with Socket.io
* **Dynamic point claiming** system with random point generation (1–10 points)
* **User management**: Add new users instantly
* **Automatic ranking** based on total points
* **Live notifications** with auto-dismiss

### UI/UX Highlights

* Mobile-first design optimized for all devices
* Smooth animations and hover effects
* Gradient backgrounds and modern styling
* Interactive trophy system with visual rewards
* Tabbed navigation for different ranking views
* Status bar simulation for authentic mobile feel

---

## 🛠️ Tech Stack

### Frontend

* **React** 19.1.0
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Socket.io Client**
* **Axios**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Socket.io**
* **CORS**

---

## 📦 Installation & Setup

### Prerequisites

* Node.js v18 or higher
* MongoDB database
* Git

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/leaderboard-project.git
   cd leaderboard-project/backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   CLIENT_ORIGIN=http://localhost:5173
   PORT=4000
   ```
4. Seed the database:

   ```bash
   npm run seed
   ```
5. Start the server:

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file:

   ```env
   VITE_API_URL=http://localhost:4000
   ```
4. Start the development server:

   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch:

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainer.

---

*Made with ❤️ by Adhisree Paul.*

