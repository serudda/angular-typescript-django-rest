(function () {
    'use strict';
    angular
        .module('mainApp.pages.signUpPage', [])
        .config(config);
    function config($stateProvider) {
        $stateProvider
            .state('page.signUp', {
            url: '/signUp',
            views: {
                'container': {
                    templateUrl: 'signUpPage.html',
                    controller: 'mainApp.pages.signUpPage.SignUpPageController',
                    controllerAs: 'vm'
                }
            },
            params: {
                user: null
            },
            parent: 'page'
        });
    }
})();
//# sourceMappingURL=signUpPage.config.js.map