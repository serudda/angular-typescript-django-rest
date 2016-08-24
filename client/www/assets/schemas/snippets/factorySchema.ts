/**
 * {1:nameService}
 * @description - Some description
 * @constructor
 * @param {type} title - The title of the book.
 * @param {type} author - The author of the book.
 */
/*

module {2:path.of.file} {

    'use strict';

    export interface {3:InterfaceService} {
        //properties
        {4:propety}: {5:type};
        //methods
        {8:method}:({9:param}: {10:type}) => {11:typeReturn};
        //third party
        {12:thirdMethod}: {13:type} //log: ng.ILogCall;
    }

    class {1:nameService} implements {3:InterfaceService} {
    
        static serviceId = '{7:module}.{1:nameService}';
        {4:propety}: {5:type};
        {12:thirdMethod}: {13:type}; //log: ng.ILogCall;

        //inject dependencies
        static $inject = ['{14:dependency}'];
        
        //constructor receive the dependency as a parameter. 
        //The parameter is marked as private (optional), so that it is available throughout the whole class
        constructor(private {14:dependency}: {6:dependencyType}) {
            this.{4:property} = 'example';
        }
        
        //methods
        {8:method}({9:param}: {10:type}): {11:typeReturn} {
            
        }

        //instance method is a requirement from Angular, that needs a method that returns something as the registration function for factories and directives.
        static instance({14:dependency}: {6:dependencyType}): {3:InterfaceService} {
            return new {1:nameService}({14:dependency});
        }
        
    }

    angular
        .module('{7:module}')
        .factory({1:nameService}.serviceId, {1:nameService}.instance);

}


//More information: https://hstefanski.wordpress.com/2015/08/19/converting-an-angular-app-to-typescript-part-2/

*/