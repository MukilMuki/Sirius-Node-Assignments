let fs = require("fs");

function readFromFile() {
  var file = fs.readFileSync("./cdw_ace23_buddies.json", "utf-8");
  return file;
}

function createBuddy(newBuddy) {
  try {
    var existingBuddy = JSON.parse(readFromFile());
    existingBuddy.push(newBuddy);
    fs.writeFileSync("./cdw_ace23_buddies.json", JSON.stringify(existingBuddy));
    return "Buddy added";
  } catch (err) {}
}

function updateBuddy(updatedBuddy) {
  var buddy = JSON.parse(readFromFile());

  var updateBuddyID = buddy.findIndex(
    (element) => element.employeeId == updatedBuddy.employeeId
  );
  if (updateBuddyID !== -1) {
    if (buddy[updateBuddyID].employeeNickname)
      buddy[updateBuddyID].employeeNickname = updatedBuddy.employeeNickname;
    if (buddy[updateBuddyID].employeeBirthday)
      buddy[updateBuddyID].employeeBirthday = updatedBuddy.employeeBirthday;
    if (buddy[updateBuddyID].employeeHobbies)
      buddy[updateBuddyID].employeeHobbies = updatedBuddy.employeeHobbies;
    fs.writeFileSync("./cdw_ace23_buddies.json", JSON.stringify(buddy));
    return "Buddy updated";
  } else return "Buddy not found";
}

function displayBuddy() {
  const buddy = readFromFile();
  return buddy;
}

function displayBuddyByID(buddyID) {
  const buddies = JSON.parse(readFromFile());
  const selectedBuddy = buddies.filter((id) => id.employeeId == buddyID);
  return selectedBuddy.length > 0 ? selectedBuddy[0] : "Buddy not found";
}

function deleteBuddy(buddyID) {
  const buddies = JSON.parse(readFromFile());
  var findBuddy = buddies.findIndex((element) => element.buddyID == buddyID);
  buddies.splice(findBuddy, 1);
  fs.writeFileSync("./cdw_ace23_buddies.json", JSON.stringify(buddies));
  return "Buddy deleted";
}

module.exports = {
  createBuddy,
  updateBuddy,
  displayBuddy,
  displayBuddyByID,
  deleteBuddy,
};
