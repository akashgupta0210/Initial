(function() {
    'use strict';
    angular.module('mean.role').factory('RoleService', RoleService);
    RoleService.$inject = ['$http', '$q','$resource'];

    function RoleService($http, $q, $resource) {
        return {
            name: 'role',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/role/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            createRole: $resource('/api/role', {}, {
                update: {method: 'PUT'},
                query: {method: 'GET', isArray: true}
            }),
            role: $resource('/api/role/:roleId', {roleId: '@_id'}, {
                update: {method: 'PUT'},
                query: {method: 'GET', isArray: true}
            })
        };
    }
})();
