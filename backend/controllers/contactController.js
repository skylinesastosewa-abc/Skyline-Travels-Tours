const Contact = require("../models/contact");

exports.submitInquiry = async (req, res) => {
    try {
        console.log("Received Data:", req.body);

        const newInquiry = new Contact(req.body);
        await newInquiry.save();

        return res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
        });
    } catch (error) {
        console.error("Submit Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while submitting inquiry",
        });
    }
};


exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find();
    res.json(inquiries);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ success: false, message: "Server error while fetching inquiries" });
  }
};

// Delete inquiry (admin only)
exports.deleteInquiry = async (req, res) => {
  try {
    const inquiryId = req.params.id;
    await Contact.findByIdAndDelete(inquiryId);
    res.json({ success: true, message: "Inquiry deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, message: "Server error while deleting inquiry" });
  }
};
