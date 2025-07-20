const mongoose = require('mongoose');

// Use the MONGO_URI environment variable
const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful');
}).catch((err) => console.log('no connection', err));