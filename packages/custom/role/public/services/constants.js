angular.module('mean.role').constant('ROLE', {
    PATH: {
        LIST_ROLE: '/admin/role',
        CREATE_ROLE: '/admin/role/create',
        EDIT_ROLE: '/admin/role/:roleId/edit',
        SHOW_ROLE: '/admin/role/:roleId/view',
        
        // LIST_FEATURE_ROLE: '/admin/featurerole',
        // CREATE_FEATURE_ROLE: '/admin/featurerole/create',
        // EDIT_FEATURE_ROLE: '/admin/featurerole/:roleId/edit',
        // SHOW_FEATURE_ROLE: '/admin/featurerole/:featureroleId/view',

        LIST_FEATURE: '/admin/feature',
        CREATE_FEATURE: '/admin/feature/create',
        EDIT_FEATURE: '/admin/feature/:featureId/edit',
        SHOW_FEATURE: '/admin/feature/:featureId/view'

        // FEATURE_CATEGORY_LIST: '/admin/featurecategory',
        // FEATURE_CATEGORY_CREATE: '/admin/featurecategory/create',
        // FEATURE_CATEGORY_EDIT: '/admin/featurecategory/:featureCategoryId/edit',
        // FEATURE_CATEGORY_DETAILS: '/admin/featurecategory/:featureCategoryId/details'
    },
    FILE_PATH: {
        LIST_ROLE: 'role/views/role_list.html',
        CREATE_ROLE: 'role/views/role_create.html',
        EDIT_ROLE: 'role/views/role_edit.html',
        SHOW_ROLE: 'role/views/role_view.html',
        
        // LIST_FEATURE_ROLE: 'role/views/featurerole_list.html',
        // CREATE_FEATURE_ROLE: 'featurerole/views/featurerole_create.html',
        // EDIT_FEATURE_ROLE: 'featurerole/views/featurerole_edit.html',
        // SHOW_FEATURE_ROLE: 'featurerole/views/featurerole_view.html',

        LIST_FEATURE: 'role/views/feature_list.html',
        CREATE_FEATURE: 'role/views/feature_create.html',
        EDIT_FEATURE: 'role/views/feature_edit.html',
        SHOW_FEATURE: 'role/views/feature_view.html'

        // FEATURE_CATEGORY_LIST: 'role/views/featurecategory_list.html',
        // FEATURE_CATEGORY_CREATE: 'role/views/featurecategory_create.html',
        // FEATURE_CATEGORY_EDIT: 'role/views/featurecategory_edit.html',
        // FEATURE_CATEGORY_DETAILS: 'role/views/featurecategory_details.html'
    },
    STATE: {
        LIST_ROLE: 'role_list',
        CREATE_ROLE: 'role_create',
        EDIT_ROLE: 'role_edit',
        SHOW_ROLE: 'role_show',

        // LIST_FEATURE_ROLE: 'featurerole_list',
        // CREATE_FEATURE_ROLE: 'featurerole_create',
        // EDIT_FEATURE_ROLE: 'featurerole_edit',
        // SHOW_FEATURE_ROLE: 'featurerole_show',

        LIST_FEATURE: 'feature_list',
        CREATE_FEATURE: 'feature_create',
        EDIT_FEATURE: 'feature_edit',
        SHOW_FEATURE: 'feature_show'

        // FEATURE_CATEGORY_LIST: 'featurecategory_list',
        // FEATURE_CATEGORY_CREATE: 'featurecategory_create',
        // FEATURE_CATEGORY_EDIT: 'featurecategory_edit',
        // FEATURE_CATEGORY_DETAILS: 'featurecategory_details',
    }
});