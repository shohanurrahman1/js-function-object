var shoppingCart = {
    books: 3,
    sunGlass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25
}
// When you know the specific property name, use dot notation to get the property value 
var penCount = shoppingCart.pen;

// Alternative system
// When you know the specific property name, use dot notation to get the property value 
var perCount2 = shoppingCart['pen'];

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);

// Set property value
// Prothom var 15 set korve (Eita 1ta niyom)
shoppingCart.mouse = 15;
console.log(shoppingCart);

// Tar por again set korbe 29 (Eita arekta niyom)
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

// VARIABLE KE CALL KORE PROPERTY VALE SET 
shoppingCart[propertyName] = 36;
console.log(shoppingCart);