var app;
(function (app) {
    var pages;
    (function (pages) {
        var signUpPage;
        (function (signUpPage) {
            var SignUpPageController = (function () {
                function SignUpPageController($state, $filter, $scope, AuthService) {
                    this.$state = $state;
                    this.$filter = $filter;
                    this.$scope = $scope;
                    this.AuthService = AuthService;
                    this._init();
                }
                SignUpPageController.prototype._init = function () {
                    this.form = {
                        username: '',
                        email: '',
                        password: ''
                    };
                    this.error = {
                        message: ''
                    };
                    this.activate();
                };
                SignUpPageController.prototype.activate = function () {
                    console.log('signUpPage controller actived');
                };
                SignUpPageController.prototype.signUp = function () {
                    var self = this;
                    this.AuthService.signUpPassword(this.form.username, this.form.email, this.form.password);
                };
                SignUpPageController.controllerId = 'mainApp.pages.signUpPage.SignUpPageController';
                SignUpPageController.$inject = [
                    '$state',
                    '$filter',
                    '$scope',
                    'mainApp.auth.AuthService'];
                return SignUpPageController;
            }());
            signUpPage.SignUpPageController = SignUpPageController;
            angular
                .module('mainApp.pages.signUpPage')
                .controller(SignUpPageController.controllerId, SignUpPageController);
        })(signUpPage = pages.signUpPage || (pages.signUpPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=signUpPage.controller.js.map