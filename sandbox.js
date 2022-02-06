// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// AMN you can declare at the beginning an array of numbers and string and add later
// a string ro number but you CAN'T add later a boolean. First you have to declare
// a boolean as well.
//mixed.push(true)
//let mixed2 = ['ken', 4, true, 'chun-li', 8, false]
//mixed2.push(true) // AMN I can do this but...
//mixed2.push({ theKey: 'theValue'}) // AMN I can't do this.
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
// AMN - we CAN'T modify the keys of an array, we can redefine the object but not
// modify the keys once created.
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
