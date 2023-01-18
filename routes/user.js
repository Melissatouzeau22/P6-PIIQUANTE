const express = require("express");
const { PasswordCheck } = require("../middleware/password-validator");
const router = express.Router();
const usersCtrl = require("../controllers/usersCtrl");

router.post("/signup", PasswordCheck, usersCtrl.signUp);
router.post("/login", usersCtrl.logUser);

module.exports = router;
