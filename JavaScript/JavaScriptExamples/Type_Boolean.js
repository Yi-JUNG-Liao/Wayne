
var person = {
    name: "Kevin",
    email: "Kevin@gmail.com",
    phone: "0912-345678"
}

/* console.log(`${person.name},${person.email},${person["phone"]}`);
console.log(`${person["name"]},${person["email"]},${person.phone}`)
 */
var mary = {
    name: "Mary",
    email: "Mary@gmail.com",
    phone: "0954-345678"
}

var john = {
    name: "John",
    email: "John@gmail.com",
    phone: "0978-345678"
}

var array1 = [person, mary, john];

console.log("--------------------------------------------------------");
console.log(array1[0]);
console.log("--------------------------------------------------------");
console.log(array1[1]);
console.log("--------------------------------------------------------");
console.log(array1[2]);

console.log(array1[2].name);
console.log(array1[2].email);
console.log(array1[2].phone);

console.log('.......JSON.......')
var personString = JSON.stringify(array1);
console.log(personString);
console.log('Type is :' + typeof personString);

var personObject = JSON.stringify(personString);
console.log(personObject);
console.log(typeof personObject);



var gender = false;

console.log(x == gender);

console.log(1 == true);

console.log(typeof (true));

console.log(typeof 1);

console.log(1 + true);

var x = '1';

var y = 1;

console.log(x + y);

console.log(x - y);

console.log(0.1 + 0.2);

console.log(typeof 0.1);

console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
