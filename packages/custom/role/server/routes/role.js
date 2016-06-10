(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(RoleCtrl, app, auth, database, circles) {

        // var requiresAdmin = circles.controller.hasCircle('admin');
        // var requiresLogin = circles.controller.hasCircle('authenticated');

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

        // app.get('/api/role/example/anyone', function(req, res) {
        //     res.send('Anyone can access this');
        // });

        // app.get('/api/role/example/auth', requiresLogin, function(req, res) {
        //     res.send('Only authenticated users can access this');
        // });

        // app.get('/api/role/example/admin', requiresAdmin, function(req, res) {
        //     res.send('Only users with Admin role can access this');
        // });

        // app.get('/api/role/example/render', function(req, res) {
        //     Role.render('index', {
        //         package: 'role'
        //     }, function(err, html) {
        //         //Rendering a view from the Package server/views
        //         res.send(html);
        //     });
        // });
    };
})();
