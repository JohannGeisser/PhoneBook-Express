const Person = require('../model/person');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllPersons = asyncWrapper(async (req, res) => {
  const persons = await Person.find();
  res.status(200).json({ persons });
});

const getPerson = asyncWrapper(async (req, res, next) => {
  const { id: personID } = req.params;
  const person = await Person.findOne({ _id: personID });
  if (!person) {
    return next(
      createCustomError(`Person with ID: ${personID} not found`, 404)
    );
  }
  res.status(200).json({ person });
});

const createPerson = asyncWrapper(async (req, res) => {
  const person = await Person.create(req.body);
  res.status(201).json({ person });
});

const deletePerson = asyncWrapper(async (req, res, next) => {
  const { id: personID } = req.params;
  const person = await Person.findOneAndDelete({ _id: personID });

  if (!person) {
    return next(
      createCustomError(`Person with ID: ${personID} not found`, 404)
    );
  }
  res.sendStatus(204);
});

const updatePerson = asyncWrapper(async (req, res, next) => {
  const { id: PersonID } = req.params;
  const person = await Person.findOneAndUpdate({ _id: PersonID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!person) {
    return next(
      createCustomError(`Person with ID: ${PersonID} not found`, 404)
    );
  }
  res.status(200).json({ person });
});

module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
