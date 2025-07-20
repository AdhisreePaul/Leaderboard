# 🏆 Real-Time Leaderboard System

A modern, responsive leaderboard application with real-time updates, built with React, Node.js, and Socket.io. Features a beautiful mobile-first UI with smooth animations and instant notifications.

![Leaderboard Demo](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Socket.io](https://img.shields.io/badge/Real--time-Socket.io-orange)

## ✨ Features

###  Core Functionality
- **Real-time leaderboard updates** with Socket.io
- **Dynamic point claiming system** with random point generation (1-10 points)
- **User management** - Add new users instantly
- **Ranking system** - Automatic rank calculation based on total points
- **Mobile-responsive design** with beautiful gradients and animations

###  UI/UX Highlights
- **Mobile-first design** optimized for all devices
- **Smooth animations** and hover effects
- **Real-time notifications** with auto-dismiss
- **Gradient backgrounds** and modern styling
- **Interactive trophy system** with visual rewards
- **Tabbed navigation** for different ranking views
- **Status bar simulation** for authentic mobile feel

###  Technical Features
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Axios** for API communication
- **MongoDB** with Mongoose for data persistence
- **Express.js** RESTful API
- **CORS** enabled for cross-origin requests
- **Error handling** with user-friendly messages

##  Live Demo

**Frontend**: [Vercel Deployment](https://your-app.vercel.app)  
**Backend**: [Railway Deployment](https://your-backend.railway.app)

## 📱 Screenshots

### Main Leaderboard
![Main Leaderboard](https://via.placeholder.com/400x800/FFD700/000000?text=Leaderboard+View)

### Add User Interface
![Add User](https://via.placeholder.com/400x800/FF6B35/FFFFFF?text=Add+User+Form)

### Real-time Notifications
![Notifications](https://via.placeholder.com/400x800/4CAF50/FFFFFF?text=Success+Notification)

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time bidirectional communication
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leaderboard-project.git
   cd leaderboard-project/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   CLIENT_ORIGIN=http://localhost:5173
   PORT=4000
   ```

4. **Seed the database**
   ```bash
   npm run seed
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment variables**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:4000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainer.

---

**Made with ❤️ by [Your Name]**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/leaderboard-project)](https://github.com/yourusername/leaderboard-project/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/leaderboard-project)](https://github.com/yourusername/leaderboard-project/network)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/leaderboard-project)](https://github.com/yourusername/leaderboard-project/issues)
