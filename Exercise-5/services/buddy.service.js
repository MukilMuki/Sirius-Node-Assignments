const { readFromFile, writeJSONData } = require("../utils/helper");
const logger = require("../utils/logger");
const buddySuccess = "Buddy found and modified";
const buddyFail = "Buddy not found";

function createBuddy(newBuddy) {
  try {
    var existingBuddy = JSON.parse(readFromFile());
    existingBuddy.push(newBuddy);
    writeJSONData(existingBuddy);
    return buddySuccess;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${err.statusMessage} - ${err.message}`
    );
  }
}

function updateBuddy(buddyID, buddyData) {
  try {
    var buddy = JSON.parse(readFromFile());

    var updateBuddyID = buddy.findIndex(
      (element) => element.employeeId == buddyID
    );
    if (updateBuddyID !== -1) {
      if (buddy[updateBuddyID].employeeNickname)
        buddy[updateBuddyID].employeeNickname = buddyData.employeeNickname;
      if (buddy[updateBuddyID].employeeBirthday)
        buddy[updateBuddyID].employeeBirthday = buddyData.employeeBirthday;
      if (buddy[updateBuddyID].employeeHobbies)
        buddy[updateBuddyID].employeeHobbies = buddyData.employeeHobbies;
      writeJSONData(buddy);
      return buddySuccess;
    } else return buddyFail;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${err.statusMessage} - ${err.message}`
    );
  }
}

function displayBuddy() {
  try {
    const buddy = readFromFile();
    return buddy;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${err.statusMessage} - ${err.message}`
    );
  }
}

function displayBuddyByID(buddyID) {
  try {
    const buddies = JSON.parse(readFromFile());
    const selectedBuddy = buddies.filter((id) => id.employeeId == buddyID);
    return selectedBuddy.length > 0 ? selectedBuddy[0] : buddyFail;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${err.statusMessage} - ${err.message}`
    );
  }
}

function deleteBuddy(employeeId) {
  try {
    const buddies = JSON.parse(readFromFile());
    const findBuddy = buddies.findIndex(
      (element) => element.employeeId == employeeId
    );
    if (findBuddy == -1) return buddyFail;
    buddies.splice(findBuddy, 1);
    writeJSONData(buddies);
    return buddySuccess;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${err.statusMessage} - ${err.message}`
    );
  }
}

module.exports = {
  createBuddy,
  updateBuddy,
  displayBuddy,
  displayBuddyByID,
  deleteBuddy,
};
