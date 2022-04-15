/*Write a singleton function to create an object only once

- Singleton is a design pattern which restricts the creation of only one object from a given interface
- When requested multiple times, same object is returned */

var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function runSingleton() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    console.log("Same instance? " + (instance1 === instance2));
}
runSingleton()

//Note : Here both 'instance1' and 'instace2' are referencing to the same object