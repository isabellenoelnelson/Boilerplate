const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.get("*", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../public"));
});

app.use(express.static(path.join(__dirname, "../public")));

app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
