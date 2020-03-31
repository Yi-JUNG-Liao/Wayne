var Person =
{
    name: 'Kevin',
    email: 'Kevin@gmail.com',
    phone: '0933-159224',
    height: 178,
    weight: 75,
    bmi: function () {
        return this.weight / ((this.height / 100) ** 2);
    }
};

console.log(Person.bmi());

var p = new Object();
p.name = "Kevin";
p.email = "Kevin@gmail.com";
p.phone = "0933-159224";

console.log(Person);
console.log(p);

var person = {
    name: 'Kevin',
    age: 35,
    height: 178,
    weight: 75,
    bmi: function () {
        return this.weight / ((this.height / 100) ** 2);
    }
}
function Person(name, age, height, weight) {
    this.name = 'Kevin',
        this.age = 35,
        this.height = 178,
        this.weight = 75,
        this.bmi = function () {
            return this.weight / ((this.height / 100) ** 2);
        }
}

let lady = new Person('Mary', 26, 168, 52);

console.log(lady.bmi());

console.log(JSON.stringify(lady));