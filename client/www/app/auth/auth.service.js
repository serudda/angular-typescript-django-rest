var app;
(function (app) {
    var auth;
    (function (auth) {
        'use strict';
        var AuthService = (function () {
            function AuthService(session, $q, $rootScope, $http) {
                this.session = session;
                this.$q = $q;
                this.$http = $http;
                console.log('auth service called');
            }
            AuthService.prototype.signUpPassword = function (username, email, password) {
                var self = this;
                var userData = {
                    username: username,
                    email: email,
                    password: password
                };
                return this.$http.post('/api/v1/accounts/', {
                    username: userData.username,
                    password: userData.password,
                    email: userData.email
                });
            };
            AuthService.serviceId = 'mainApp.auth.AuthService';
            AuthService.$inject = ['$q',
                '$rootScope',
                '$http'];
            return AuthService;
        }());
        auth.AuthService = AuthService;
        angular
            .module('mainApp.auth')
            .service(AuthService.serviceId, AuthService);
    })(auth = app.auth || (app.auth = {}));
})(app || (app = {}));
//# sourceMappingURL=auth.service.js.map