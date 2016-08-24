/**
 * {1:NameClassController}
 * @description - Some description
 * @constructor
 * @param {type} title - The title of the book.
 * @param {type} author - The author of the book.
 */
/*

module {2:path.of.file} {

export interface {3:InterfaceController} {  
    {9:property}: {5:type};
    activate: () => void;
}

export class {1:NameClassController} implements {3:InterfaceController} {

    static controllerId = '{7:module}.{1:NameClassController}';
    {9:property}: {5:type};

    //inject dependencies
    static $inject = ['{4:dependency}'];
    //constructor receive the dependency as a parameter. 
    //The parameter is marked as private (optional), so that it is available throughout the whole class
    constructor(private {4:dependency}: {6:dependencyType}) {
        this.init();
    }
    //init function to handle all initialization logic
    private init() {
        this.{9:property} = 'example';
        this.activate();
    }
    //active function to handle all controller logic
    activate(): void {
        
    }
    //methods
    {8:method}(): {10:typeReturn} {} {
    
    }
}

angular
    .module('{7:module}')
    .controller({1:NameClassController}.controllerId, {1:NameClassController});

}


//More information: https://hstefanski.wordpress.com/2015/07/22/converting-an-angular-app-to-typescript/

*/