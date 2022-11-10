console.log("wlliam is here");
// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(firstName, lastName, age, isAdmin = false) {
    return {
        school: 'Noroff',
        firstName: "String",
        lastName: "String",
        age: Number,
        isAdmin: Boolean,
    };
}
const newUser = createUser('Ola', 'Nordmann', 18);
const newAdmin = createUser('Kari', 'Nordmann', 36, true);
//# sourceMappingURL=question-1.js.map