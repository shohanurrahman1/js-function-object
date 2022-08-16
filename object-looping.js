/* 
// Array vs Object
// Array
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];

// Object
var friendsAge = {
    rahim: 12,
    karim: 60, 
    jamal: 32,
    robi: 32,
    anika: 21
} 
*/

var shoppingCart = {
    books: 3,
    sunGlass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
}

// Sob properties (Key) dekhabe array er modde
const keys = Object.keys(shoppingCart);
// console.log(keys);

// Sob properties er value dekhabe array er modde
const values = Object.values(shoppingCart);
// console.log(values);

// var keys = [ 'books', 'sunGlass', 'Keyboard', 'mouse', 'pen', 'shoes' ]
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName, propertyValues);
}

// FOR IN LOOP (For in loop ea key use korbo na)
for (var propertyName in shoppingCart) {
    const propertyValues = shoppingCart[propertyName];
    console.log(propertyName, propertyValues);
}