const express = require("express");
const router = express.Router();
const { createStaff, getStaff, updateStaff, deleteStaff, staffLogin } = require("../controllers/staffController");


const auth = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly")

router.post("/", adminOnly, createStaff);
router.get("/", adminOnly, getStaff);
router.put("/:id", adminOnly, updateStaff);
router.delete("/:id", adminOnly, deleteStaff);
router.post("/login", staffLogin);

module.exports = router;
