(function() {
    'use strict';
    angular.module('mean.role').factory('FeatureService', FeatureService);
    FeatureService.$inject = ['$http', '$q','$resource'];

    function FeatureService($http, $q, $resource) {
        return {
            createFeature: $resource('api/feature', {}, {
            	update: {
                    method: 'PUT'
                },
            	query: {
                    method: 'GET',
                    isArray: true
                }
        	}),
        	feature: $resource('api/feature/:featureId', {
                featureId: '@_id'
            }, {
            	update: {
                    method: 'PUT'
                },
            	query: {
                    method: 'GET',
                    isArray: true
                }
        	})
        }
    }
})();