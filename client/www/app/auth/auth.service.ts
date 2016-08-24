/**
 * AuthService
 * @description - Authorization Service
 * @function
 * @param {app.core.firebase.FirebaseFactory} FirebaseFactory - Firebase connections.
 * @param {AngularFireAuthService} $firebaseAuth - AngularFire methods.
 */

module app.auth {
    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface IAuthService {
        signUpPassword: (username: string, email: string, password: string) => void;
    }


    /****************************************/
    /*           CLASS DEFINITION           */
    /****************************************/
    export class AuthService implements IAuthService {

        static serviceId = 'mainApp.auth.AuthService';

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/

        // --------------------------------

        /*-- INJECT DEPENDENCIES --*/
        static $inject = ['$q',
                          '$rootScope',
                          '$http'];

        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private session: ISessionService,
                    private $q: any,
                    $rootScope: app.core.interfaces.IFinAppRootScope,
                    private $http: angular.IHttpService) {
            console.log('auth service called');
        }

        /**********************************/
        /*            METHODS             */
        /**********************************/


        /**
        * signUpPassword
        * @description - Create Account on Database
        * @function TODO: refactor this comment block
        * @params {app.interfaces.IUserDataAuth} currentDataUser - User Authenticated Data
        * @return {angular.IPromise<any>} promise - return user uid created promise
        */
        signUpPassword (username, email, password): any {
            let self = this;
            let userData: app.core.interfaces.IUserDataAuth = {
                username: username,
                email: email,
                password: password
            };

            return this.$http.post('/api/v1/accounts/', {
                username: userData.username,
                password: userData.password,
                email: userData.email
            });
        }

    }

    /*-- MODULE DEFINITION --*/
    angular
    .module('mainApp.auth')
    .service(AuthService.serviceId, AuthService);

}
