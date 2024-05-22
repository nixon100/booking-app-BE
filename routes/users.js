const express = require('express');
const router = express.Router();
const {
    updateUser,
    deleteUser,
    getUser,
    getUsers
} = require("../controllers/user.js")


//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUsers);

module.exports = router;