'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

/**
 * ConfigType Schema.
 */
var RoleSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: true,
        unique: true
        // validate:[validateUniqueRoleName,'Name already exists']
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
    features: {
        type: [
            {type: Schema.ObjectId, ref: 'Feature'}
        ]
    }
});

RoleSchema.statics.load = function (id, callback) {
    this.findOne({
        _id: id
    }).exec(callback);
};
mongoose.model('Role', RoleSchema);