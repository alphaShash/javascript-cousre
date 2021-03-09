/* // js has objects
we can create an object and dynamically add properties
and methods to it when ever it is required but objects 
are the focus in JS , but in other languages like Java, C# and C++
we create a class and add properties and methods to the class
up front and the are static that they cannot be changed
so you cant be adding properties and method declarations#
to the object at runtime.C
JS has a prototype ChannelSplitterNode, that is suppose that 
we have defined a literal object like our typical car
When we create new object based on an old object
something special happens in JS there is a PerformanceEntrylink that's created btw those
that new obj always knows who it inherited all those 
properties it's original set of properties from
 */

 let originalCar = {
     make: 'audi',
     model: 'R8',
     year: 2021
 };

 let newCar = Object.create(originalCar);

 console.log(newCar.make);
//  newCar.make = 'bmw';
//  console.log(newCar.make);
 console.log(newCar.whatever);

 console.log(Object.getPrototypeOf(newCar));

 let myProto = Object.getPrototypeOf(newCar);
 console.log(myProto.make);

 originalCar.doors = 4;
 console.log(newCar.doors);

 console.log(originalCar.hasOwnProperty('doors'));

 console.log(newCar.hasOwnProperty('doors'));


