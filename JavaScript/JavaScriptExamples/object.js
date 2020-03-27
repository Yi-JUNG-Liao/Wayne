var employee = {
    name: "Kevin",
    email: "kevin@gmail.com",
    title: "Developer",
    phone: {
        home: "(03)366-4946",
        office: "(03)342-5178",
        mobile: "0922-155342"
    }
}

var emp = new Object();
emp.name = 'David';
emp.email = 'David@gmail.com';
console.log(emp.name);

var mary = new employee();
mary.Name = 'Mary';
mary.Email = 'mary@gmail.com'



// console.log(employee.phone.home + ", " + employee['phone']['mobile'])

for (const prop in employee) {
    console.log(`${prop}`);
}
for (const prop in employee) {
    console.log(`employee.${prop}:${employee[prop]}`);
}



var person1 = 'Kevin';
var person2 = new String('Kevin');
var person3 = String('Kevin')

console.log('.'.repeat(60));
console.log(person1, typeof person1);
console.log(person2, typeof person2);
console.log(person3, typeof person3);