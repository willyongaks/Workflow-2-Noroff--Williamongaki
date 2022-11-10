console.log("wlliam is here")


// Create User interface. The types are:
//  school: string
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: OPTIONAL boolean

interface createUser {
  school: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin?: boolean;
}



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

