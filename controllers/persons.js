const getAllPersons = (req, res) => {
  res.status(200).send('Get all persons');
};

const getPerson = (req, res) => {
  res.status(200).send('Get one person');
};

const createPerson = (req, res) => {
  res.status(201).send('Create person');
};

const updatePerson = (req, res) => {
  res.status(200).send('Update person');
};

const deletePerson = (req, res) => {
  res.status(200).send('Delete person');
};

module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
