var app;
(function (app) {
    var core;
    (function (core) {
        var util;
        (function (util) {
            var customPopup;
            (function (customPopup) {
                'use strict';
                var CustomPopupService = (function () {
                    function CustomPopupService($compile) {
                        this.$compile = $compile;
                        console.log('customPopup service called');
                    }
                    CustomPopupService.prototype.invokeCardRewardPopup = function (scope, popupConfig) {
                        scope.cardRewardScope = scope.$new();
                        scope.cardRewardScope.popupConfig = popupConfig;
                        var element = document.createElement("ma-card-reward-popup");
                        document.body.appendChild(element);
                        this.$compile(element)(scope.cardRewardScope);
                    };
                    CustomPopupService.prototype.invokeCardResultPopup = function (scope, popupConfig) {
                        scope.cardResultScope = scope.$new();
                        scope.cardResultScope.popupConfig = popupConfig;
                        var element = document.createElement("ma-card-result-popup");
                        document.body.appendChild(element);
                        this.$compile(element)(scope.cardResultScope);
                    };
                    CustomPopupService.serviceId = 'mainApp.core.util.CustomPopupService';
                    CustomPopupService.$inject = ['$compile'];
                    return CustomPopupService;
                }());
                customPopup.CustomPopupService = CustomPopupService;
                angular
                    .module('mainApp.core.util', [])
                    .service(CustomPopupService.serviceId, CustomPopupService);
            })(customPopup = util.customPopup || (util.customPopup = {}));
        })(util = core.util || (core.util = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=customPopup.service.js.map