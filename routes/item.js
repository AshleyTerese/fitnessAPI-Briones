//Simply copy the content of the user routes. Remove the routes. Update the imports.
const express = require("express");
const itemController = require("../controllers/item");

//Our features require an authenticated user to access. Import our auth module.
//Retrieve verify from the auth module
const {verify} = require("../auth");

const router = express.Router();

//You can copy from our project.txt the endpoints and controller names.
//Comment them in and out as you go to prevent errors in node/express.
//As previously learned, undefined controllers produce an error in express.

router.post("/", verify, itemController.addItem);
router.get("/", verify, itemController.getAllItems);
router.get("/:id", verify, itemController.getItemById);
router.put("/:id", verify, itemController.updateItem);
router.delete("/:id", verify, itemController.deleteItem);

module.exports = router;