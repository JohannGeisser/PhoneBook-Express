const express = require('express');
const {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/persons');

const router = express.Router();

router.get('/', getAllPersons);

router.post('/', createPerson);

router.get('/:id', getPerson);

router.patch('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
