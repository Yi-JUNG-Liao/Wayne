var x = 1;
var y = 2;

const z = 3;

//Block Statement(區塊陳述式)

if (true) {
    var x = 'a';
    let y = 'b';
    const z = 'c';

    console.log(x);
    console.log(y);
    console.log(z);


}

console.log('-'.repeat(100));
console.log(x);
console.log(y);
console.log(z);

for (var i = 0; i < 3; ++i) {
    console.log(i);
}
console.log(i);

// $ex('for');
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
        console.log(`${x}x${y}=${x * y}`)
    }
}

