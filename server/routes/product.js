const router = require("express").Router();
const Product = require("../models/Product");

//Create Products
router.post("/create", async (req, res) => {
	console.log(req.body);
	const newProduct = new Product(req.body);
	try {
		const savedProduct = await newProduct.save();

		res.status(201).json(savedProduct);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//Update Products
router.put("/:id", async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);

		res.status(201).json(updatedProduct);
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
		console.log(err);
	}
});

//Delete Products
router.delete("/:id", async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Product has been Deleted!" });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
		console.log(err);
	}
});

router.get("/", (req, res) => {
	res.send("routes working");
});

module.exports = router;
