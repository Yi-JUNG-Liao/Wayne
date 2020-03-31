var array1 = [];

var array2 = new Array();

var array3 = new Array(10);

var comp = new Array('CPU', 'DRAM', 'SSD');

var products = [
    ['CPU', 'DRAM', 'SSD', 'Mouse'],
    ['BMW', 'Benz', 'Audi', 'Lexus'],
    ['Apple', 'Banana', 'Cherry']
];

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];

for (var i = 0; i < Cars.length; i++) {
    console.log(Cars[i]);
}

var Person = ['John', 35, 'john@gmail.com'];

Person.forEach(function (item, index, array) {
    console.log(index, item, typeof item)
})

Person.forEach(function (element) {
    console.log(element);
})

var Computer = ['CPU', 'DRAM', 'SSD', 'MOUSE'];
var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];

var prods = Computer.concat(Cars).concat(Prices);
console.log(prods);


var PricesWithTax = Prices.map(p => p * 1.05);
console.log(PricesWithTax);

var Prices = [280, 320, 250, 210];
var totalPrice = Prices.map(p => p * 1.05).reduce((total, current) => total + current);
console.log(totalPrice);

var Fruits = ['Apple', 'Banana', 'Cerry']

