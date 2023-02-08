const router = require("express").Router();
const Product = require("../models/Product");
const uniqid = require("uniqid");

//Create Products
router.post("/create", async (req, res) => {
	console.log(req.body);
	let uniq_id = uniqid.process();
	uniq_id = uniq_id.slice(uniq_id.length - 5, uniq_id.length);
	const newProduct = new Product({ ...req.body, uniq_id });
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

// get all products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		// console.log(products);
		res.status(200).json(products);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Something went wrong" });
	}
});

module.exports = router;
