const router = require("../routes/");

module.exports = (app) => {
	app.use("/atlas/users", router.users);

	app.use("/api/users", router.users);

	app.use("/atlas/articles", router.articles);

	app.use("*", (req, res, next) =>
		res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
	);
};
