function calcRectArea(height, width) {
    return height * width;
}

console.log(calcRectArea(4, 8));

const getRectArea = function (height, width) {
    return height * width
}

console.log(getRectArea(3, 4));

function sum(...Args) {
    var sum = Args.reduce((total, current) => {
        return total + current;
    });
    return sum;
}
console.log(sum(1, 3, 5, 7, 9, 11, 13, 15));

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(8, 9));

var sun = (x, y) => { return x + y };

console.log(sun(8, 9));

var display = (name) => { console.log('你的名字是:' + name) };

display('廖翊融');

var products = ['iPhone', 'iPad', 'Mac', 'Apple Watch'];

products.map(function (element) {
    element = '蘋果商品:' + element;
    console.log(element);
});

products.map((element) => {
    element = '蘋果商品:' + element;
    console.log(element);
});

var bmi = (height, weight) => { return weight / ((height / 100) ** 2) }
// **做平方
console.log(bmi(179, 78));


var array = [1, 3, 5, 7, 9];
array.forEach((item) => { console.log(item) });

var Tax = (amount, taxPercent) => { return amount * (1 + (taxPercent / 100)) };
console.log(Tax(100, 5));


