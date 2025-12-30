const Staff = require("../models/staff");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createStaff = async (req, res) => {
  try {
    const { name, department, email, password } = req.body;

    // Check if staff already exists
    const existing = await Staff.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStaff = new Staff({
      name,
      department,
      email,
      password: hashedPassword,
    });

    await newStaff.save();

    res.status(201).json({ success: true, message: "Staff created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error to create staff" });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staffList = await Staff.find().select("-password").sort({ createdAt: -1 });
    res.json(staffList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error to fetch staff" });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const { name, department, email, password } = req.body;
    const staffId = req.params.id;

    const updateData = { name, department, email };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    await Staff.findByIdAndUpdate(staffId, updateData);
    res.json({ success: true, message: "Staff updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error to update staff" });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    await Staff.findByIdAndDelete(staffId);
    res.json({ success: true, message: "Staff deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error to delete staff" });
  }
};
// Staff login
exports.staffLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const staff = await Staff.findOne({ email });
    if (!staff) return res.status(400).json({ success: false, message: "Staff not found" });

    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });

    res.json({
      success: true,
      token,
      staff: { _id: staff._id, name: staff.name, email: staff.email, department: staff.department },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
