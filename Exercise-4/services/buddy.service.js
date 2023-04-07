const { readFromFile, writeJSONData } = require("../utils/helper");

function createBuddy(newBuddy) {
  try {
    const buddySuccess = "Buddy created";
    const buddyFail = "Buddy with that id already exists";
    var existingBuddy = JSON.parse(readFromFile());
    const existingBuddyID = existingBuddy.findIndex(
      (element) => element.employeeId == newBuddy.employeeId
    );
    if (existingBuddyID == -1) {
      existingBuddy.push(newBuddy);
      console.log(existingBuddy);
      writeJSONData(existingBuddy);
      return buddySuccess;
    } else {
      return buddyFail;
    }
  } catch (err) {
    return buddyFail;
  }
}

function updateBuddy(buddyID, buddyData) {
  try {
    const buddySuccess = "Buddy found and modified";
    const buddyFail = "Buddy not found";
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
    return err;
  }
}

function displayBuddy() {
  try {
    const buddy = readFromFile();
    return buddy;
  } catch (err) {
    return err;
  }
}

function displayBuddyByID(buddyID) {
  try {
    const buddyFail = "Buddy not found";
    const buddies = JSON.parse(readFromFile());
    const selectedBuddy = buddies.filter((id) => id.employeeId == buddyID);
    return selectedBuddy.length > 0 ? selectedBuddy[0] : buddyFail;
  } catch (err) {
    return err;
  }
}

function deleteBuddy(employeeId) {
  const deleteFail = "Couldnt delete";
  const deleteSuccess = "Successfully Deleted Buddy";
  try {
    const buddies = JSON.parse(readFromFile());
    const findBuddy = buddies.findIndex(
      (element) => element.employeeId == employeeId
    );
    if (findBuddy == -1) {
      return deleteFail;
    } else if (findBuddy != -1) {
      buddies.splice(findBuddy, 1);
      writeJSONData(buddies);
      return deleteSuccess;
    }
  } catch (err) {
    return err;
  }
}

module.exports = {
  createBuddy,
  updateBuddy,
  displayBuddy,
  displayBuddyByID,
  deleteBuddy,
};
