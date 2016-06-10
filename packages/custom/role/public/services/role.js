(function() {
    'use strict';

    function Role($http, $q) {
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

            }
        };
    }

    angular
        .module('mean.role')
        .factory('Role', Role);

    Role.$inject = ['$http', '$q'];

})();
