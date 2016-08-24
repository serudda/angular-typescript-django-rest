var app;
(function (app) {
    var core;
    (function (core) {
        var util;
        (function (util) {
            var functionsUtil;
            (function (functionsUtil) {
                'use strict';
                var FunctionsUtilService = (function () {
                    function FunctionsUtilService() {
                        console.log('functionsUtil service called');
                    }
                    FunctionsUtilService.splitDateFormat = function (date) {
                        var dateString = moment(date).format('YYYY/MMM/DD').split('/');
                        var dateFormatted = {
                            complete: date,
                            day: dateString[2],
                            month: dateString[1],
                            year: dateString[0]
                        };
                        return dateFormatted;
                    };
                    FunctionsUtilService.prototype.dateMonthToString = function (date, zone) {
                        var dateFormatted = new Date(date);
                        var options = { month: "long" };
                        var month = dateFormatted.toLocaleDateString(zone, options);
                        return month;
                    };
                    FunctionsUtilService.prototype.formatCurrency = function (num, formatted) {
                        var currency = {
                            num: num,
                            formatted: formatted
                        };
                        if (currency.formatted) {
                            currency.num = accounting.unformat(currency.formatted);
                        }
                        currency.formatted = accounting.formatMoney(currency.num, '$', 0);
                        return currency;
                    };
                    FunctionsUtilService.generateGuid = function () {
                        var fmt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
                        var guid = fmt.replace(/[xy]/g, function (c) {
                            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        });
                        return guid;
                    };
                    FunctionsUtilService.prototype.getPositionByUid = function (array, uid) {
                        var index = array.map(function (element) {
                            return element.Uid;
                        }).indexOf(uid);
                        return index;
                    };
                    FunctionsUtilService.prototype.groupByYear = function (array) {
                        var newArrayGroupedByYear = _.groupBy(array, function (item) {
                            return item.dateCreated.year;
                        });
                        return newArrayGroupedByYear;
                    };
                    FunctionsUtilService.serviceId = 'finApp.core.util.FunctionsUtilService';
                    return FunctionsUtilService;
                }());
                functionsUtil.FunctionsUtilService = FunctionsUtilService;
                angular
                    .module('finApp.core.util')
                    .service(FunctionsUtilService.serviceId, FunctionsUtilService);
            })(functionsUtil = util.functionsUtil || (util.functionsUtil = {}));
        })(util = core.util || (core.util = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
