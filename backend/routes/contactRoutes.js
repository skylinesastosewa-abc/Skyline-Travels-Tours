const express = require("express");
const router = express.Router();
const { submitInquiry, getInquiries, deleteInquiry } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", submitInquiry);

router.get("/", authMiddleware, getInquiries);


router.delete("/:id", authMiddleware, deleteInquiry);

module.exports = router;
