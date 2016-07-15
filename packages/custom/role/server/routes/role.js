(function() {
    'use strict';

    module.exports = function(RoleCtrl, app, auth, database, circles) {
        var rolectrl = require('../controllers/role')(RoleCtrl);

        // APIS
        app.route('/api/role')
            .post(rolectrl.create)
            .get(rolectrl.all);

        app.route('/api/role/:roleId')
            .get(rolectrl.show)
            .put(rolectrl.update)
            .delete(rolectrl.destroy);

        app.param('roleId', rolectrl.role);
    };
})();