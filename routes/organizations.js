const express = require('express');
const {
  getAllOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} = require('../controllers/organizations');

const router = express.Router();

router.get('/', getAllOrganizations);

router.post('/', createOrganization);

router.get('/:id', getOrganization);

router.patch('/:id', updateOrganization);

router.delete('/:id', deleteOrganization);

module.exports = router;
