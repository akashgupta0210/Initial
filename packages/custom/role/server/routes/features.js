(function() {
    'use strict';

// var hasAuthorization = function (req, res, next) {
//     var hasFeatures = validation.hasPermission(req, FEATURES.FEATURE.name);
//     if (!req.user.isAdmin && !hasFeatures) {
//         return res.status(401).send(ERRORS.ERROR_1012);
//     }
//     next();
// };


    module.exports = function (FeatureCtrl, app, auth, database) {
        var featurectrl = require('../controllers/features')(FeatureCtrl);

        app.route('/api/feature')
            .post(featurectrl.create)
            .get(featurectrl.all);

        //Image upload api
        app.route('/api/upload/image')
            .post(featurectrl.postImage);

        app.route('/api/feature/:featureId')
            .get(featurectrl.show)
            .put(featurectrl.update)
            .delete(featurectrl.destroy);

        app.param('featureId', featurectrl.feature);
    };
})();