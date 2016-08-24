(function () {
    'use strict';
    angular
        .module('mainApp', [
        'mainApp.auth',
        'mainApp.core',
        'mainApp.core.util',
        'mainApp.localStorage',
        'mainApp.pages.signUpPage'
    ])
        .config(config);
    function config($locationProvider, $urlRouterProvider, $translateProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/page/tutorial');
        var prefix = 'assets/i18n/';
        var suffix = '.json';
        $translateProvider.useStaticFilesLoader({
            prefix: prefix,
            suffix: suffix
        });
        $translateProvider.preferredLanguage('es');
    }
})();
//# sourceMappingURL=app.module.js.map