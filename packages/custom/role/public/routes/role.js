(function() {
    'use strict';

    function Role($stateProvider) {
        $stateProvider.state('role example page', {
            url: '/role/example',
            templateUrl: 'role/views/index.html'
        }).state('role circles example', {
            url: '/role/example/:circle',
            templateUrl: 'role/views/example.html'
        });
    }

    angular
        .module('mean.role')
        .config(Role);

    Role.$inject = ['$stateProvider'];

})();
