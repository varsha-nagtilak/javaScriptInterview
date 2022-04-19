# Javascript Intervew Questions

### 1. What are factory functions in JavaScript ?
A factory function is simply a function that returns an object.

Factory functions do not require the use of the new keyword, but can still be used to initialize an object, like a constructor.

Often, factory functions are used as API wrappers, like in the cases of jQuery and moment.js, so users do not need to use new.

The following is the simplest form of factory function:
```jsx harmony
<script>
  
    // Factory Function creating person
    var Person = function (name, age) {
  
        // creating person object
        var person = {};
  
        // parameters as keys to this object  
        person.name = name;
        person.age = age;
  
        // function to greet
        person.greeting = function () {
            return (
                'Hello I am ' + person.name 
                    + '. I am ' + person.age 
                    + ' years old. '
            );
        };
        return person;
    };
  
    var person1 = Person('Abhishek', 20);
    console.log(person1.greeting());
  
    var person2 = Person('Raj', 25);
    console.log(person2.greeting());
</script>
```


### 2. What is Singleton function in JavaScript ?
- Singleton is a design pattern which restricts the creation of only one object from a given interface
- When requested multiple times, same object is returned
```js
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

// driver code
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
```

###### Notes

Here both 'instance1' and 'instace2' are referencing to the same object
