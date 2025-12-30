const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");
require("dotenv").config();

(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "admin@sasto.com";
  const password = "Admin@123";

  const exists = await Admin.findOne({ email });
  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await Admin.create({
    email,
    password: hashedPassword
  });

  console.log("Admin created successfully");
  process.exit();
})();
