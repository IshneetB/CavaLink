const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Create a new student
router.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;