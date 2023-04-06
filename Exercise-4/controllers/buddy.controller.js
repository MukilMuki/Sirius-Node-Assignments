let fs = require("fs");
const {
  displayBuddy,
  createBuddy,
  displayBuddyByID,
  updateBuddy,
  deleteBuddy,
} = require("../services/buddy.service");

const newBuddyController = (req, res) => {
  const newBuddy = req.body;
  const addedBuddy = createBuddy(newBuddy);
  res.send(addedBuddy);
};

const updateBuddyController = (req, res) => {
  const changeBuddy = req.body;
  res.send(updateBuddy(changeBuddy));
};

const displayBuddyController = (req, res) => {
  res.send(displayBuddy());
};

const displayBuddyByIDController = (req, res) => {
  const id = req.body.employeeId;
  res.send(displayBuddyByID(id));
};

const deleteBuddyController = (req, res) => {
  const id = req.body.employeeId;
  res.send(deleteBuddy(id));
};

module.exports = {
  newBuddyController,
  updateBuddyController,
  displayBuddyController,
  displayBuddyByIDController,
  deleteBuddyController,
};
