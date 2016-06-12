(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter


// var MESSAGE = require('../../../../core/system/server/controllers/message.js');
// var FEATURES = require('../../../../core/system/server/controllers/features.js');
// var validation = require('../../../../core/system/server/controllers/validationUtil.js');
// var ERRORS = MESSAGE.ERRORS;

// var hasAuthorization = function (req, res, next) {
//     var hasFeatures = validation.hasPermission(req, FEATURES.FEATURE_CATEGORIES.name);
//     if (!req.user.isAdmin && !hasFeatures) {
//         return res.status(401).send(ERRORS.ERROR_1012);
//     }
//     next();
// };

	module.exports = function (FeatureCategoryCtrl, app, auth, database) {
		// var requiresAdmin = circles.controller.hasCircle('admin');
	    // var requiresLogin = circles.controller.hasCircle('authenticated');
	    var featureCategoryCtrl = require('../controllers/featureCategory')(FeatureCategoryCtrl);
	    app.route('/api/featureCategory')
	        .post(featureCategoryCtrl.create)
	        .get(featureCategoryCtrl.all);
	    app.route('/api/featureCategory/:featureCategoryId')
	        .get(featureCategoryCtrl.show)
	        .put(featureCategoryCtrl.update)
	        .delete(featureCategoryCtrl.destroy);
	    app.param('featureCategoryId', featureCategoryCtrl.featureCategory);
	};
})();