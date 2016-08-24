/**
 * SessionService
 * @description - Session Service
 * @function
 * @param {app.core.firebase.FirebaseFactory} FirebaseFactory - Firebase connections.
 * @param {AngularFireAuthService} $firebaseAuth - AngularFire methods.
 */

module app.auth {
    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface ISessionService {
        getAuthData:() => string;
    }


    /****************************************/
    /*           CLASS DEFINITION           */
    /****************************************/
    export class SessionService implements ISessionService {

        static serviceId = 'mainApp.auth.SessionService';

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        private _authData: string = JSON.parse(this.localStorage.getItem('session.authData'));
        // --------------------------------

        /*-- INJECT DEPENDENCIES --*/
        static $inject = ['mainApp.localStorageService'];

        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private localStorage) {
            console.log('session service called');
        }

        /**********************************/
        /*            METHODS             */
        /**********************************/

        /**
        * get AuthData
        * @description - Return data user session Authenticated
        * @get
        * @return {string} this._authData - user session authenticated
        */
        getAuthData(): string {
            return this._authData;
        }

    }

    /*-- MODULE DEFINITION --*/
    angular
    .module('mainApp.auth', [])
    .service(SessionService.serviceId, SessionService);

}
