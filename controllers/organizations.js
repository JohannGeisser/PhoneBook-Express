const Organization = require('../model/organization');
const asyncWrapper = require('../middleware/async');

const getAllOrganizations = asyncWrapper(async (req, res) => {
  const organizations = await Organization.find();
  res.status(200).json({ organizations });
});

const getOrganization = asyncWrapper(async (req, res) => {
  const { id: organizationID } = req.params;
  const organization = await Organization.findOne({ _id: organizationID });
  if (!organization) {
    return res
      .status(404)
      .json({ msg: `Organization with ID: ${organizationID} not found` });
  }
  res.status(200).json({ organization });
});

const createOrganization = asyncWrapper(async (req, res) => {
  const organization = await Organization.create(req.body);
  res.status(201).json({ organization });
});

const deleteOrganization = asyncWrapper(async (req, res) => {
  const { id: organizationID } = req.params;
  const organization = await Organization.findOneAndDelete({
    _id: organizationID,
  });

  if (!organization) {
    return res
      .status(404)
      .json({ msg: `Organization with ID: ${organizationID} not found` });
  }
  res.sendStatus(204);
});

const updateOrganization = asyncWrapper(async (req, res) => {
  const { id: organizationID } = req.params;
  const organization = await Organization.findByIdAndUpdate(
    { _id: organizationID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!organization) {
    return res
      .status(404)
      .json({ msg: `Organization with ID: ${organizationID} not found` });
  }
  res.status(200).json({ organization });
});

module.exports = {
  getAllOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
};
