'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    RoleModel = mongoose.model('Role'),
    _ = require('lodash');

module.exports = function (RoleCtrl) {

    return {
        /**
         * Find Role by id
         */

        role: function (req, res, next, id) {
            RoleModel.load(id, function (err, role) {
                if (err) {
                    return next(err);
                }
                if (!role) {
                    return next(new Error('Failed to load role ' + id));
                }
                req.role = role;
                next();
            });
        },


        create: function (req, res) {
            var role = new RoleModel(req.body);
            req.assert('name', 'Please enter  Name').notEmpty();
            req.assert('description', 'You must enter description').notEmpty();
            var errors = req.validationErrors();
            if (errors) {
                return res.status(400).send(errors);
            }
            role.save(function (err) {
                if (err) {
                    switch (err.code) {
                        case 11000:
                        case 11001:
                            res.status(400).json([{
                                msg : ' Role already exists',
                                param : 'name'
                            }]);
                        break;
                        default:
                        var modelErrors = [];
                        if (err.errors) {
                            for (var x in err.errors) {
                                modelErrors.push({
                                    param: x,
                                    msg: err.errors[x].message,
                                    value: err.errors[x].value
                                });
                            }
                            res.status(400).json(modelErrors);
                        }
                    }
                    return res.status(400);
                }
                res.json(role);
            });
        },


        /** Update the Role
         */
        update: function (req, res) {
            var role = req.role;
            role = _.extend(role, req.body);
            req.assert('name', 'Please enter  Name').notEmpty();
            req.assert('description', 'You must enter description').notEmpty();
            role.save(function (err) {
                if (err) {
                    switch (err.code) {
                        case 11000:
                        case 11001:
                            res.status(400).json([{
                                msg : ' Role already exists',
                                param : 'name'
                            }]);
                        break;
                        default:
                            var modelErrors = [];
                        if (err.errors) {
                            for (var x in err.errors) {
                                modelErrors.push({
                                    param: x,
                                    msg: err.errors[x].message,
                                    value: err.errors[x].value
                                });
                            }
                            res.status(400).json(modelErrors);
                        }
                    }
                    return res.status(400);
                }
                res.json(role);
            });
        },


        /**
         * Delete the Role
         */
        destroy: function (req, res) {
            var role = req.role;
            role.remove(function (err) {
                if (err) {
                    return res.status(400).json({
                        error: 'Cannot delete the role'
                    });
                }
                res.json(role);
            });
        },

        /**
         * Show the Role
         */
        show: function (req, res) {     
            res.json(req.role);
        },

        /**
         * List of Roles
         */
        all: function (req, res) {

            RoleModel.find().exec(function (err, roles) {
                if (err) {
                    return res.status(400).json({
                        error: 'Cannot list the Roles'
                    });
                }
                res.json(roles);
            });
        }
        
    };
}