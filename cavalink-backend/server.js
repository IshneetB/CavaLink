const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const app = express();

// Middleware
app.use(express.json());

// Use the routes
app.use('/api', studentRoutes);

// Connect to MongoDB
mongoose.connect('your_mongo_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});