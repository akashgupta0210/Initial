(function() {
    'use strict';

    angular.module('mean.role').config(Role);
    Role.$inject = ['$stateProvider','ROLE'];
    function Role($stateProvider,ROLE) {
        $stateProvider.state('role example page', {
            url: '/role/example',
            templateUrl: 'role/views/index.html'
        })
        .state('role circles example', {
            url: '/role/example/:circle',
            templateUrl: 'role/views/example.html'
        })
        .state(ROLE.STATE.LIST_ROLE, {
            url: ROLE.PATH.LIST_ROLE,
            templateUrl: ROLE.FILE_PATH.LIST_ROLE,
            // resolve: {
            //     loggedin: function (MeanUser) {
            //         return MeanUser.checkLoggedin();
            //     }
            // }
        })
        .state(ROLE.STATE.CREATE_ROLE, {
            url: ROLE.PATH.CREATE_ROLE,
            templateUrl: ROLE.FILE_PATH.CREATE_ROLE,
            // resolve: {
            //     loggedin: function (MeanUser) {
            //         return MeanUser.checkLoggedin();
            //     }
            // }
        })
        .state(ROLE.STATE.EDIT_ROLE, {
            url: ROLE.PATH.EDIT_ROLE,
            templateUrl: ROLE.FILE_PATH.EDIT_ROLE,
            // resolve: {
            //     loggedin: function (MeanUser) {
            //         return MeanUser.checkLoggedin();
            //     }
            // }
        })
        .state(ROLE.STATE.SHOW_ROLE, {
            url: ROLE.PATH.SHOW_ROLE,
            templateUrl: ROLE.FILE_PATH.SHOW_ROLE,
            // resolve: {
            //     loggedin: function (MeanUser) {
            //         return MeanUser.checkLoggedin();
            //     }
            // }
        });
    }
})();