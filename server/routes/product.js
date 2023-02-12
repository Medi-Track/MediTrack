const router = require("express").Router();
const Product = require("../models/product");
const uniqid = require("uniqid");

//Create Products
router.post("/create", async (req, res) => {
	console.log(req.body);
	let uniq_id = uniqid.process();
	uniq_id = uniq_id.slice(uniq_id.length - 4, uniq_id.length);
	const newProduct = new Product({ ...req.body, uniq_id });
	try {
		const savedProduct = await newProduct.save();

		res.status(201).json(savedProduct);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//dec the quantity of the product
router.put("/dec-medicines", async (req, res) => {
	console.log("dec-medicines route");
	const medicines = req.body;
	if (!medicines) return res.status(400).json({ message: "No items found" });

	try {
		// Decrease the quantity of the product by item.stock
		medicines.forEach(async (item) => {
			const updatedProduct = await Product.findByIdAndUpdate(
				item._id,
				{
					$inc: { stock: -item.stock },
				},
				{ new: true }
			);
		});
		res.status(201).json({ message: "Product has been Removed!" });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
		console.log(err);
	}
});

// aad the quantity of the product
router.put("/inc-medicines", async (req, res) => {
	console.log("inc-medicines route");

	const medicines = req.body;
	if (!medicines) return res.status(400).json({ message: "No items found" });

	try {
		// increate the quantity of the product by item.stock
		medicines.forEach(async (item) => {
			const updatedProduct = await Product.findByIdAndUpdate(
				item._id,
				{
					$inc: { stock: item.stock },
				},
				{ new: true }
			);
		});
		res.status(201).json({ message: "Product has been Added!" });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
		console.log(err);
	}
});

//Update Products
router.put("/update/:id", async (req, res) => {
	console.log("update with id");
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

// get a product with id
router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Something went wrong" });
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
