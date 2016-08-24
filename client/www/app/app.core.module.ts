/**
 * module() Here inject dependencies of Angular Modules and 3rd Party
 *
 * @param {none}
 * @return {void}
 */

(function (): void {
    'use strict';

    angular.module('mainApp.core', [
        /*Angular Modules*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        /*3rd Party*/
    ]);

})();
