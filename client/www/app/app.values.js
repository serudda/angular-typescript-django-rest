(function () {
    'use strict';
    var dataConfig = {
        baseUrl: 'https://shining-fire-8072.firebaseio.com',
        salaryIncomeUrl: '/income/salary',
        investmentIncomeUrl: '/income/investment',
        businessIncomeUrl: '/income/business',
        neccesaryExpenseUrl: '/typeOfExpense/necessaries/',
        unneccesaryExpenseUrl: '/typeOfExpense/unnecessaries/',
        userId: ''
    };
    angular
        .module('mainApp')
        .value('dataConfig', dataConfig);
})();
//# sourceMappingURL=app.values.js.map