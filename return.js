/* function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
    console.log('I need more code');
    return 15;
    return 'Hello Done';
    return 'I an hungry';
}
add(20, 30);
var total = add(20, 30);
console.log('total', total); */

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating Singaras:', singaras);