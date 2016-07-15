'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

var validateUniqueRoleName = function (value, callback) {
    var Role = mongoose.model('Role');
    Role.find({
        $and: [
            {
                name: { $regex: new RegExp(value, "i") }

            },
            {
                _id: {
                    $ne: this._id
                }
            }
        ]
    }, function (err, role) {
        callback(err || role.length === 0);
    });
};


/**
 * ConfigType Schema.
 */
var RoleSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: true,
        unique: true,
        validate:[validateUniqueRoleName,'Name already exists']
    },
    description: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    permission: [{
        featureName: {
            type: Schema.ObjectId,
            ref: 'Feature'
        },
        read: {
            type:Boolean,
            default: false
        },
        write: {
            type:Boolean,
            default: false
        },
        edit: {
            type:Boolean,
            default: false
        },
        delete: {
            type:Boolean,
            default: false
        }
    }]
});

RoleSchema.statics.load = function (id, callback) {
    this.findOne({
        _id: id
    }).exec(callback);
};
mongoose.model('Role', RoleSchema);