(function() {
    'use strict';

    angular.module('mean.role').config(Role);
    Role.$inject = ['$stateProvider','ROLE'];
    function Role($stateProvider,ROLE) {
    	$stateProvider
    	.state(ROLE.STATE.LIST_FEATURE, {
            url: ROLE.PATH.LIST_FEATURE,
            templateUrl: ROLE.FILE_PATH.LIST_FEATURE,
            // resolve: {
//                 loggedin: function (MeanUser) {
//                     return MeanUser.checkLoggedin();
//                 }
//             }
        })
        .state(ROLE.STATE.CREATE_FEATURE, {
            url: ROLE.PATH.CREATE_FEATURE,
            templateUrl: ROLE.FILE_PATH.CREATE_FEATURE,
//             resolve: {
//                 loggedin: function (MeanUser) {
//                     return MeanUser.checkLoggedin();
//                 }
//             }
        })
        .state(ROLE.STATE.EDIT_FEATURE, {
            url: ROLE.PATH.EDIT_FEATURE,
            templateUrl: ROLE.FILE_PATH.EDIT_FEATURE,
//             resolve: {
//                 loggedin: function (MeanUser) {
//                     return MeanUser.checkLoggedin();
//                 }
//             }
        })
        .state(ROLE.STATE.SHOW_FEATURE, {
             url: ROLE.PATH.SHOW_FEATURE,
            templateUrl: ROLE.FILE_PATH.SHOW_FEATURE,
//             resolve: {
//                 loggedin: function (MeanUser) {
//                     return MeanUser.checkLoggedin();
//                 }
//             }
        })
	};
})();