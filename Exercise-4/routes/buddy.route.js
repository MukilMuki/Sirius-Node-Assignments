let express = require("express");
const router = express.Router();
let port = 4000;

let buddyController = require("../controllers/buddy.controller");

router.post("/add", buddyController.newBuddyController);

router.get("/viewall", buddyController.displayBuddyController);

router.get("/viewbyid", buddyController.displayBuddyByIDController);

router.put("/update", buddyController.updateBuddyController);

router.delete("/delete", buddyController.deleteBuddyController);

module.exports = router;
