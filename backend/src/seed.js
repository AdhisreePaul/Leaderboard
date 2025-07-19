require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const initial = ['Rahul','Kamal','Sanak','Anita','Vikram','Jaya','Pooja','Rohit','Asha','Kiran'];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await Promise.all(initial.map(name => User.create({ name })));
  console.log('Seeded users 🌱');
  process.exit();
})();
