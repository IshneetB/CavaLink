const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');  // Fixed path
const clubRoutes = require('./routes/clubRoutes');        // Fixed path
const app = express();

// Middleware
app.use(express.json());

// Use the routes
app.use('/api/students', studentRoutes);  // This would be your student routes
app.use('/api/clubs', clubRoutes);        // This would be your club routes

// Connect to MongoDB
mongoose.connect('mongodb+srv://dishidhak:<CavaLink@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});