/**
 * {1:nameDirective}
 * @description - Some description
 * @constructor
 * @param {type} title - The title of the book.
 * @param {type} author - The author of the book.
 */
/*
module {2:path.of.file} {
    'use strict';

    export interface {3:InterfaceDirective} extends ng.IDirective {

    }

    class {1:nameDirective} implements {3:InterfaceDirective} extends ng.IDirective {
        //directive config
        static directiveId = '{1: nameDirective}';
        bindToController = true;
        controller = {9:NameClassController}.controllerId;
        controllerAs = 'vm';
        restrict = 'EA';
        scope = {
            //'example': '='
        };
        templateUrl = '{8:templateUrl}';

        //inject dependencies
        static $inject = ['{4:dependency}'];
        //constructor receive the dependency as a parameter. 
        //The parameter is marked as private (optional), so that it is available throughout the whole class
        constructor({4:dependency}: {6:dependencyType}) {
        }

        //instance method is a requirement from Angular, that needs a method that returns something as the registration function for factories and directives.
        static instance({4:dependency}: {6:dependencyType}): {3:InterfaceDirective} {
            return new {1:nameDirective}({4:dependency});
        }
    }

    angular
        .module('{7:module}')
        .directive({1:nameDirective}.directiveId, {1:nameDirective}.instance);


    /*********************************************************/
    /*                     CONTROLLER                        */
    /*********************************************************/
    /**
     * {9:NameClassController}
     * @description - Some description
     * @constructor
     * @param {type} title - The title of the book.
     * @param {type} author - The author of the book.
     */

    /*
    interface {3:InterfaceController} {
        {10:property}: {5:type};
        activate: () => void;
    }

    class {9:NameClassController} implements {3:InterfaceController} {

        static controllerId = '{7:module}.{9:NameClassController}';
        {10:property}: {5:type};

        //inject dependencies
        static $inject = ['{4:dependency}'];
        //constructor receive the dependency as a parameter. 
        //The parameter is marked as private (optional), so that it is available throughout the whole class
        constructor(private {4:dependency}: {6:dependencyType}) {
            this.init();
        }
        //init function to handle all initialization logic
        private init() {
            this.{10:property} = 'example';
            this.activate();
        }
        //active function to handle all controller logic
        activate(): void {

        }
        //methods
        {8:method} () {
    
        }

    }

    angular.module('{7:module}')
        .controller({9:NameClassController}.controllerId, {9:NameClassController});

}

*/