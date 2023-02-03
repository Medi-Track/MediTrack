const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
	{
		title: { type: String, trim: true, required: true },
		stock: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
