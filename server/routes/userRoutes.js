const express = require('express');
const router = express.Router();
const {registerUser, loginUser, findUser, findAllUsers, updateUser, deleteUser} = require('../controllers/userController')

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/find/:userId", findUser)
router.get("/", findAllUsers)
router.put("/update/:userId", updateUser)
router.delete("/delete/:userId", deleteUser)

module.exports = router;
