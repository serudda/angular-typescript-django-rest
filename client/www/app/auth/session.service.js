var app;
(function (app) {
    var auth;
    (function (auth) {
        'use strict';
        var SessionService = (function () {
            function SessionService(localStorage) {
                this.localStorage = localStorage;
                this._authData = JSON.parse(this.localStorage.getItem('session.authData'));
                console.log('session service called');
            }
            SessionService.prototype.getAuthData = function () {
                return this._authData;
            };
            SessionService.serviceId = 'mainApp.auth.SessionService';
            SessionService.$inject = ['mainApp.localStorageService'];
            return SessionService;
        }());
        auth.SessionService = SessionService;
        angular
            .module('mainApp.auth', [])
            .service(SessionService.serviceId, SessionService);
    })(auth = app.auth || (app.auth = {}));
})(app || (app = {}));
//# sourceMappingURL=session.service.js.map