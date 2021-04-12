// apiRoutes/puppies.js
const router = require("express").Router();

// matches GET requests to /api/placholder/
router.get("/", function (req, res, next) {
	/* etc */
});
// matches POST requests to /api/placholder/
router.post("/", function (req, res, next) {
	/* etc */
});
// matches PUT requests to /api/placholder/:id
router.put("/:id", function (req, res, next) {
	/* etc */
});
// matches DELETE requests to /api/placholder/:id
router.delete("/:id", function (req, res, next) {
	/* etc */
});

module.exports = router;
