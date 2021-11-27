const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Articles.find()
            .then((origamies) => res.send(origamies))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Articles.create({ description, author: _id })
            .then((createdOrigami) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdOrigami } }),
                    models.Articles.findOne({ _id: createdOrigami._id })
                ]);
            })
            .then(([modifiedObj, origamiObj]) => {
                res.send(origamiObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Articles.updateOne({ _id: id }, { description })
            .then((updatedArticles) => res.send(updatedArticles))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Articles.deleteOne({ _id: id })
            .then((removedArticles) => res.send(removedArticles))
            .catch(next)
    }
};