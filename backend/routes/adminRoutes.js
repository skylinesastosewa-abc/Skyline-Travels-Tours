const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

router.post("/login", loginAdmin);

router.get("/dashboard", auth, (req, res) => {
  res.json({ message: "Admin dashboard access granted" });
});
router.get("/staff-user", adminOnly, (req, res) => {
  res.json({ message: "Staff user dashboard access granted" });
});


module.exports = router;
