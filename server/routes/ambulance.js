const router = require("express").Router();

router.get("/", (req, res) => {
	console.log("ambulance route");
});

module.exports = router;
