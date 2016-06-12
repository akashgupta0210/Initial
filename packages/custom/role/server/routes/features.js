(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter

// var MESSAGE = require('../../../../core/system/server/controllers/message.js');
// var FEATURES = require('../../../../core/system/server/controllers/features.js');
// var validation = require('../../../../core/system/server/controllers/validationUtil.js');
// var ERRORS = MESSAGE.ERRORS;

// var hasAuthorization = function (req, res, next) {
//     var hasFeatures = validation.hasPermission(req, FEATURES.FEATURE.name);
//     if (!req.user.isAdmin && !hasFeatures) {
//         return res.status(401).send(ERRORS.ERROR_1012);
//     }
//     next();
// };


module.exports = function (FeatureCtrl, app, auth, database) {

	// var requiresAdmin = circles.controller.hasCircle('admin');
    // var requiresLogin = circles.controller.hasCircle('authenticated');

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