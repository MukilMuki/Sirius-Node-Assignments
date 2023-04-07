const {
  createBuddy,
  updateBuddy,
  displayBuddy,
  displayBuddyByID,
  deleteBuddy,
} = require("../services/buddy.service");

const newBuddyController = (req, res) => {
  const buddy = req.body;
  res.send(createBuddy(buddy));
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
  const buddySuccess = displayBuddyByID(buddyID);
  res.send(buddySuccess);
};

const deleteBuddyController = (req, res) => {
  const buddyID = req.params.employeeId;
  const buddySuccess = deleteBuddy(buddyID);
  res.send(buddySuccess);
};

module.exports = {
  newBuddyController,
  updateBuddyController,
  displayBuddyController,
  displayBuddyByIDController,
  deleteBuddyController,
};
