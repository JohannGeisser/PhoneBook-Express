const getAllOrganizations = (req, res) => {
  res.status(200).send('Get all organizations');
};

const getOrganization = (req, res) => {
  res.status(200).send('Get one Organization');
};

const createOrganization = (req, res) => {
  res.status(201).send('Create Organization');
};

const updateOrganization = (req, res) => {
  res.status(200).send('Update Organization');
};

const deleteOrganization = (req, res) => {
  res.status(200).send('Delete Organization');
};

module.exports = {
  getAllOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
};
