const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const dispatchSchema = new mongoose.Schema(
	{
		products: [
			{
				product: {
					productId: { type: ObjectId, ref: "Product" },
					quntity: { type: Number, default: 1 },
					price: { type: Number, required: true },
					title: { type: String, required: true },
				},
				amount: { type: Number },
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Dispatch", dispatchSchema);
