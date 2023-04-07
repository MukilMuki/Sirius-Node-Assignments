const {
  displayBuddy,
  createBuddy,
  displayBuddyByID,
  updateBuddy,
  deleteBuddy,
} = require("../services/buddy.service");

const newBuddyController = (req, res) => {
  const data = req.body;
  const addedBuddy = createBuddy(data);
  res.send(addedBuddy);
};

const updateBuddyController = (req, res) => {
  const data = req.body;
  const buddyID = req.params.employeeId;
  res.send(updateBuddy(buddyID, data));
};

const displayBuddyController = (req, res) => {
  res.send(displayBuddy());
};

const displayBuddyByIDController = (req, res) => {
  const buddyID = req.params.employeeId;
  res.send(displayBuddyByID(buddyID));
};

const deleteBuddyController = (req, res) => {
  const buddyID = req.params.employeeId;
  res.send(deleteBuddy(buddyID));
};

module.exports = {
  newBuddyController,
  updateBuddyController,
  displayBuddyController,
  displayBuddyByIDController,
  deleteBuddyController,
};
