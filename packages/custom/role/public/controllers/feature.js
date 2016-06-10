(function() {
    'use strict';
    /* jshint -W098 */
    angular.module('mean.role').controller('FeatureController', FeatureController);
    FeatureController.$inject = ['$scope', '$stateParams','ROLE', '$location', 'FeatureService'];
    function FeatureController($scope, $stateParams, ROLE, $location, FeatureService) {
	    $scope.package = {
	        name: 'role',
	        feature: 'Features'
	    };
	//     initializePermission($scope, $rootScope, $location, flash, $scope.package.featureName, URLFactory.MESSAGES);
	//     initializeBreadCrum($scope, $scope.package.modelName, URLFactory.ROLE.PATH.LIST_FEATURE);
	//     initializePagination($scope, $rootScope, FeatureService);
	//     pageTitleMessage($scope,URLFactory.translate,'roles.feature.WELCOME','roles.feature.TITLE_DESC');
	//     initializeDeletePopup($scope, $scope.package.modelName, URLFactory.MESSAGES, URLFactory.uibModal);

	    $scope.newFeature = function () {
	        $location.path(ROLE.PATH.CREATE_FEATURE);
	    };

	    $scope.editFeature = function (featureId) {
            var urlPath = ROLE.PATH.EDIT_FEATURE;
            urlPath = urlPath.replace(':featureId', featureId);
            $location.path(urlPath);
        };

        $scope.featureShow = function(featureId) {
            var urlPath = ROLE.PATH.SHOW_FEATURE;
            urlPath = urlPath.replace(':featureId', featureId);
            $location.path(urlPath);
        };

	//     $scope.findCategory = function () {
	//         FeatureCategoryService.featureCategory.query(function (categories) {
	//             $scope.categories = categories;
	//         });
	//     };

	    $scope.create = function (isValid) {
	        if (isValid) {
	            var feature = new FeatureService.createFeature($scope.feature);
	            feature.$save(function (response) {
	                $location.path(ROLE.PATH.LIST_FEATURE);
	            }, function (error) {
	                $scope.error = error;
	            });
	        } else {
	            $scope.submitted = true;
	        }
	    };

	    $scope.destroy = function (Feature) {
	    	if (Feature){
	            Feature.$remove(function (response) {
	                for (var i in $scope.features) {
                        if ($scope.features[i] === Feature) {
                            $scope.features.splice(i, 1);
                        }
                    }
	                $location.path(ROLE.PATH.LIST_FEATURE);
	            });
	        } else {
	            $scope.features.$remove(function (response) {
                    $location.path(ROLE.PATH.LIST_FEATURE);
                });
	        }
	    };

	    $scope.update = function (isValid) {
	        if (isValid) {
	            var feature = new FeatureService.feature($scope.feature);
	            if (!feature.updated) {
	                feature.updated = [];
	            }
	            feature.updated.push(new Date().getTime());
	            feature.$update({featureId: $stateParams.featureId}, function () {
	                $location.path(ROLE.PATH.LIST_FEATURE);
	            });
	        } else {
	            $scope.submitted = true;
	        }
	    };

	    $scope.findAll = function () {
            FeatureService.feature.query(function (features) {
                $scope.features = features;
            });
        };

	    $scope.findOne = function () {
	        FeatureService.feature.get({featureId: $stateParams.featureId}, function (feature) {
	            $scope.feature = feature;
	        });
	    };

	    $scope.cancel = function () {
	        $location.path(ROLE.PATH.LIST_FEATURE);
	    };
	}
})();