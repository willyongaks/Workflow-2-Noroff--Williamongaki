// Create User interface. The types are:
//  school: string
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: OPTIONAL boolean
// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(firstName, lastName, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    return {
        school: 'Noroff',
        firstName: firstName,
        lastName: lastName,
        age: age,
        isAdmin: isAdmin
    };
}
var newUser = createUser('Ola', 'Nordmann', 18);
var newAdmin = createUser('Kari', 'Nordmann', 36, true);
console.log(newUser);
