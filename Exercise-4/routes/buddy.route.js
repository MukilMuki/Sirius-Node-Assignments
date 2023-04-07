let express = require("express");
const router = express.Router();

let buddyController = require("../controllers/buddy.controller");

router.post("/addBuddy", buddyController.newBuddyController);

router.get("/viewAllBuddies", buddyController.displayBuddyController);

router.get(
  "/viewByBuddyId/:employeeId",
  buddyController.displayBuddyByIDController
);

router.put("/updateBuddy/:employeeId", buddyController.updateBuddyController);

router.delete(
  "/deleteBuddy/:employeeId",
  buddyController.deleteBuddyController
);

module.exports = router;
