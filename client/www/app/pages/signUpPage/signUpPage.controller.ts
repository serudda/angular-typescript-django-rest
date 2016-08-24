/**
 * SignUpPageController
 * @description - Sign up Page Controller
 */

module app.pages.signUpPage {

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface ISignUpPageController {
        form: ISignUpForm;
        error: ISignUpError;
        signUp: () => void;
        activate: () => void;
    }

    export interface ISignUpForm {
        username: string;
        email: string;
        password: string;
    }

    export interface ISignUpError {
        message: string;
    }

    /****************************************/
    /*           CLASS DEFINITION           */
    /****************************************/
    export class SignUpPageController implements ISignUpPageController {

        static controllerId = 'mainApp.pages.signUpPage.SignUpPageController';

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        form: ISignUpForm;
        error: ISignUpError;
        // --------------------------------


        /*-- INJECT DEPENDENCIES --*/
        public static $inject = [
            '$state',
            '$filter',
            '$scope',
            'mainApp.auth.AuthService'];

        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(
            private $state: ng.ui.IStateService,
            private $filter: angular.IFilterService,
            private $scope: angular.IScope,
            private AuthService: app.auth.IAuthService) {

            this._init();

        }

        /*-- INITIALIZE METHOD --*/
        private _init() {

            //Init form
            this.form = {
                username: '',
                email: '',
                password: ''
            };

            this.error = {
                message: ''
            };

            this.activate();
        }

        /*-- ACTIVATE METHOD --*/
        activate(): void {
            //LOG
            console.log('signUpPage controller actived');
        }

        /**********************************/
        /*            METHODS             */
        /**********************************/

        /*
        * Register Method
        * @description Create new user if current user doesn`t have an account
        */
        signUp(): void {
            let self = this;
            this.AuthService.signUpPassword(this.form.username, this.form.email, this.form.password);
        }

    }

    /*-- MODULE DEFINITION --*/
    angular
        .module('mainApp.pages.signUpPage')
        .controller(SignUpPageController.controllerId, SignUpPageController);

}
