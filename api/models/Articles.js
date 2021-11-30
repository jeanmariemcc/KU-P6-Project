const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const articleSchema = new Schema({
	description: {
		type: String,
		required: true,
	},

	imageURL: {
		type: String,
		required: true,
	},

	title: {
		type: String,
		required: true,
	},

	created: { type: Date, default: Date.now, required: true },
	// created: {
	// 	type: Date,
	// 	default:
	// 		this.today.getDate() +
	// 		" / " +
	// 		(this.today.getMonth() + 1) +
	// 		" / " +
	// 		this.today.getFullYear(),
	// 	required: true,
	// },
});

module.exports = new Model("Articles", articleSchema);

// today: new Date(),
