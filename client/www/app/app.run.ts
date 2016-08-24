/**
 * run() run low-level functionality
 * such as authorization, get user info, roles, etc.
 *
 * @param {scope} $rootScope
 * @param {ICurrentUser} currentUser
 * @return {void}
 */

(function (): void {

    'use strict';

    angular
        .module('mainApp')
        .run(run);

    run.$inject = ['$rootScope', 'dataConfig', '$http'];

    function run($rootScope: ng.IRootScopeService,
                 dataConfig: IDataConfig,
                 $http: any ): void {
        //TODO: Get these values from the logged user
        dataConfig.userId = 'id1234';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();



(function (angular) {

  function localStorageServiceFactory($window){
    if($window.localStorage){
      return $window.localStorage;
    }
    throw new Error('Local storage support is needed');
  }

  // Inject dependencies
  localStorageServiceFactory.$inject = ['$window'];

  // Export
  angular
    .module('mainApp.localStorage', [])
    .factory('mainApp.localStorageService', localStorageServiceFactory);

})(angular);
