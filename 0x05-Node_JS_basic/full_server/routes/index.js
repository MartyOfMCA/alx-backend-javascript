const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Link / endpoint to method in AppController.
router.get('/', AppController.getHomepage);
// Link /students endpoint to method in
// StudentsController.
router.get('/students', StudentsController.getAllStudents);
// Link /students/:major to method in
// StudentsController.
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
