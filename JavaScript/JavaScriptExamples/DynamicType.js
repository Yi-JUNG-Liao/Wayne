
var age = 22; //Number

console.log(typeof age);

age = '真的是十八歲嗎?';//String

console.log(typeof age);

age = false;

console.log(typeof age);


function Add(x, y) {
    if (typeof (x) !== 'number' || typeof (y) !== 'number') {

        return NaN;
    }
    var z = x + y;
    return z;
}

if (typeof (x) != typeof (Number(x)) || typeof (y) != typeof (Number(y))) {

}

//雙等號有自動型別轉換
//三等號不會

console.log(Add(18, 5));

console.log('3' == 3);

console.log(1 == true);

console.log(Math.sqrt(4)); //開根號

var x = "Your Weight is" + 70;
var y = 75 + "is you weight";
console.log('15' + 3);
console.log('15' - 3);
console.log('15' * 3);
console.log('15' / 3);
