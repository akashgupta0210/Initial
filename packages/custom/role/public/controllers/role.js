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

        $scope.checkCircle = function() {
            RoleService.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };

        //Edited

        //     initializePermission($scope, $rootScope, $location, flash, $scope.package.featureName, URLFactory.MESSAGES);
        //     initializeBreadCrum($scope, $scope.package.modelName, URLFactory.ROLE.PATH.LIST_ROLE);
        //     pageTitleMessage($scope,URLFactory.translate,'roles.role.WELCOME','roles.role.TITLE_DESC');
        //     initializePagination($scope, $rootScope, RoleService);
        //     initializeDeletePopup($scope, $scope.package.modelName, URLFactory.MESSAGES, URLFactory.uibModal);
        
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


        $scope.create = function (isValid) {
            if (isValid){
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
            FeatureService.createFeature.query(function(features){
                $scope.features = features;
            })
        };

        //Edited

    }


})();
