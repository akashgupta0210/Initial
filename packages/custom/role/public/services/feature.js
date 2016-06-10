(function() {
    'use strict';
    angular.module('mean.role').factory('FeatureService', FeatureService);
    FeatureService.$inject = ['$http', '$q','$resource'];

    function FeatureService($http, $q, $resource) {
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
            createFeature: $resource('api/feature', {}, {
            	update: {method: 'PUT'},
            	query: {method: 'GET', isArray: true}
        	}),
        	feature: $resource('api/feature/:featureId', {featureId: '@_id'}, {
            	update: {method: 'PUT'},
            	query: {method: 'GET', isArray: true}
        	})
        }
    }
})();