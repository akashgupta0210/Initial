(function() {
    'use strict';
    /* jshint -W098 */
    angular.module('mean.role').controller('RoleController', RoleController);
    RoleController.$inject = ['$scope', 'Global', '$stateParams','ROLE', '$location', 'RoleService','FeatureService'];
    function RoleController($scope, Global, $stateParams, ROLE, $location, RoleService,FeatureService) {
        $scope.global = Global;
        $scope.package = {
            name: 'role',
            feature: 'Roles'
        };
        
        $scope.newRole = function () {
            $location.path(ROLE.PATH.CREATE_ROLE);
        };

        $scope.editRole = function (roleId) {
            var urlPath = ROLE.PATH.EDIT_ROLE;
            urlPath = urlPath.replace(':roleId', roleId);
            $location.path(urlPath);
        };

        $scope.cancel = function () {
            $location.path(ROLE.PATH.LIST_ROLE);
        };

        $scope.assignFeature = function(feature,indexValue) {
            if (angular.isUndefined($scope.role)) {
                $scope.role = {}
            }
            if (angular.isUndefined($scope.role.permission)) {
                $scope.role.permission = [];
            }
            // if (angular.isUndefined($scope.role.permission[indexValue])) {
            //     $scope.role.permission[indexValue] = {}
            // }
            if (angular.isUndefined($scope.role.permission[indexValue].featureName)) {
                $scope.role.permission[indexValue].featureName = feature._id
            } else {
                delete $scope.role.permission[indexValue]
            }
            $scope.role.permission.length = $scope.role.permission.length
            console.log($scope.role.permission)
        }

        $scope.create = function (isValid) {
            if (isValid){
                console.log($scope.role)
                var role = new RoleService.createRole($scope.role);
                role.$save(function (response) {
                    $location.path(ROLE.PATH.LIST_ROLE);
                }, function (error) {
                    $scope.error = error;
                });
            } else {
                $scope.submitted = true;
            }
        };

        $scope.update = function (isValid) {
            if (isValid) {
                var role = new RoleService.role($scope.role);
                if (!role.updated) {
                    role.updated = [];
                }
                role.updated.push(new Date().getTime());
                role.$update({roleId: $stateParams.roleId}, function () {
                    $location.path(ROLE.PATH.LIST_ROLE);
                }, function (error) {
                    $scope.error = error;
                });
            } else {
                $scope.submitted = true;
            }
        };

        $scope.destroy = function (Role) {
            if (Role){
                Role.$remove(function (response) {
                    for (var i in $scope.roles) {
                        if ($scope.roles[i] === Role) {
                            $scope.roles.splice(i, 1);
                        }
                    }
                    $location.path(ROLE.PATH.LIST_ROLE);
                });
            } else {
                $scope.role.$remove(function (response) {
                    $location.path(ROLE.PATH.LIST_ROLE);
                });
            }
        };

        $scope.findAll = function () {
            RoleService.role.query(function (roles) {
                $scope.roles = roles;
            });
        };

        $scope.findOne = function() {
            RoleService.role.get({
                roleId: $stateParams.roleId
            }, function(role) {
                $scope.role = role;
            });
        };

        $scope.listAllFeature = function(){
            var featureArray = [];
            FeatureService.createFeature.query(function(features){
                for (var i=0;i<features.length;i++) {
                    if (features[i].ismenuItem == false) {
                        featureArray.push(features[i]);
                    }
                }
                $scope.features = featureArray
            })
        };
    }
})();
