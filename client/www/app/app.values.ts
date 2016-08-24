/**
 * values() Here we define each core variables
 * such as user logged Id, end points, etc
 *
 * @param {IDataConfig} dataConfig
 * @return {void}
 */

/*--  INTERFACE --*/
interface IDataConfig {
    baseUrl: string;
    salaryIncomeUrl: string;
    investmentIncomeUrl: string;
    businessIncomeUrl: string;
    neccesaryExpenseUrl: string;
    unneccesaryExpenseUrl: string;
    userId: string;
}

/*--  MAIN FUNCTION --*/
(function (): void {

    'use strict';

    var dataConfig: IDataConfig = {
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
