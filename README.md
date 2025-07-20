🏆 Real-Time Leaderboard System
A modern, responsive leaderboard application with real-time updates, built with React, Node.js, and Socket.io. Features a beautiful mobile-first UI with smooth animations and instant notifications.

✨ Features
Core Functionality
Real-time leaderboard updates with Socket.io
Dynamic point claiming system with random point generation (1-10 points)
User management - Add new users instantly
Ranking system - Automatic rank calculation based on total points
Mobile-responsive design with beautiful gradients and animations
UI/UX Highlights
Mobile-first design optimized for all devices
Smooth animations and hover effects
Real-time notifications with auto-dismiss
Gradient backgrounds and modern styling
Interactive trophy system with visual rewards
Tabbed navigation for different ranking views
Status bar simulation for authentic mobile feel
Technical Features
TypeScript for type safety
Tailwind CSS for modern styling
Axios for API communication
MongoDB with Mongoose for data persistence
Express.js RESTful API
CORS enabled for cross-origin requests
Error handling with user-friendly messages
Live Demo
Frontend: Vercel Deployment
Backend: Railway Deployment

🛠️ Tech Stack
Frontend
React 19.1.0 - Modern UI library
TypeScript - Type-safe development
Vite - Fast build tool
Tailwind CSS - Utility-first CSS framework
Socket.io Client - Real-time communication
Axios - HTTP client
Backend
Node.js - JavaScript runtime
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - MongoDB ODM
Socket.io - Real-time bidirectional communication
CORS - Cross-origin resource sharing
📦 Installation & Setup
Prerequisites
Node.js (v18 or higher)
MongoDB database
Git
Backend Setup
Clone the repository

git clone https://github.com/yourusername/leaderboard-project.git
cd leaderboard-project/backend
Install dependencies

npm install
Environment variables Create a .env file in the backend directory:

MONGO_URI=your_mongodb_connection_string
CLIENT_ORIGIN=http://localhost:5173
PORT=4000
Seed the database

npm run seed
Start the server

npm run dev
Frontend Setup
Navigate to frontend directory

cd ../frontend
Install dependencies

npm install
Environment variables Create a .env file in the frontend directory:

VITE_API_URL=http://localhost:4000
Start the development server

npm run dev
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📞 Support
If you have any questions or need help, please open an issue on GitHub or contact the maintainer.

Made with ❤️ by Adhisree
