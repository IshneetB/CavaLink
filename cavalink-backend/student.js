const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  identity: {
    name: String,
    raceEthnicity: String,
    religion: String,
    lgbtqia: Boolean,
    firstGeneration: Boolean,
    internationalTransfer: Boolean,
    disabilities: String,
    languagesSpoken: [String]
  },
  academicProfessional: {
    major: String,
    minor: String,
    preProfessionalTrack: String,
    industry: String,
    leadership: [String],
    competitions: [String],
    research: [String],
    greekLife: Boolean,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;