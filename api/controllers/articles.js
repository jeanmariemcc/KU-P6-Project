const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Articles.find()
			.then((articles) => res.send(articles))
			.catch(next);
	},

	post: (req, res, next) => {
		const { description, title, imageURL } = req.body;
		console.log(req.body);

		models.Articles.create({ description, imageURL, title })
			.then((createdArticle) => res.send(createdArticle))
			.catch(next);
	},

	put: (req, res, next) => {
		const id = req.params.id;
		const { description, imageURL, title } = req.body;
		models.Articles.updateOne({ _id: id }, { description, imageURL, title })
			.then((updatedArticles) => res.send(updatedArticles))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Articles.deleteOne({ _id: id })
			.then((removedArticles) => res.send(removedArticles))
			.catch(next);
	},
};
