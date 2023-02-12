const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			unique: true,
			dropdups: true,
			required: true,
		},
		dec: { type: String, trim: true },
		img: { type: String, trim: true },
		price: { type: Number, trim: true, required: true },
		brand: { type: String, trim: true },
		uniq_id: { type: String, required: true },
		stock: { type: Number, default: 0 },
		expiring_date: { type: String, trim: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
