(function() {
    'use strict';

    /* jshint -W098 */

    function RoleController($scope, Global, Role, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'role'
        };

        $scope.checkCircle = function() {
            Role.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.role')
        .controller('RoleController', RoleController);

    RoleController.$inject = ['$scope', 'Global', 'Role', '$stateParams'];

})();
