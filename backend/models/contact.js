const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        inquiryType: { type: String, required: true },
        departureCity: { type: String, required: true },
        destinationCity: { type: String, required: true },
        departureDate: { type: String, required: true },
        returnDate: { type: String },
        passengers: { type: Number, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        leadSource: { type: String, required: true },
        message: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contacts", contactSchema);