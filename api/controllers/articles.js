const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Articles.find()
            .then((articles) => res.send(articles))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Articles.create({ description, author: _id })
            .then((createdArticles) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdArticles } }),
                    models.Articles.findOne({ _id: createdArticles._id })
                ]);
            })
            .then(([modifiedObj, articlesObj]) => {
                res.send(articlesObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Articles.updateOne({ _id: id }, { description })
            .then((updatedArticle) => res.send(updatedArticle))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Articles.deleteOne({ _id: id })
            .then((removedArticle) => res.send(removedArticle))
            .catch(next)
    }
};