//Users service used for users REST endpoint
'use strict';
angular.module('mean.admin').factory('Users', ['$resource',
    function($resource) {
        return $resource('/api/admin/users/:userId', {
            userId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
