const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect DB
connectDB();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API' })
);

// Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Setting up server & PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT} 👏`));
