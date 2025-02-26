let userName = "Kay";

//userName = 34;

// string, number, boolean
let userID: string | number = 'abc1';
userID = 1234;

// Object types
let user: object;
let user2: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = 'Kay';

user = {
  name: 'Kay',
  adge: 34,
  isAdmin: true,
  id: 'abc'
}

user2 = {
  name: 'Kay',
  age: 34,
  isAdmin: true,
  id: 34
}

// Array Types

let hobbies: Array<string>;
//let hobbies: string[];

hobbies = ['Sports', 'Cooking']
//hobbies = [1, 2, 3]

// Type to Funtions
//custom type, type alias

type AddFn = (a: number, b: number) => number;
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

function calculate(a: number, b:number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 3, add);

// Object Types interfaces
interface Credentials {
  password: string;
  email: string
};

let creds: Credentials;

creds = {
  password: 'abcc',
  email: 'test@test.com'
}

//Interfaces and custom types

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

//Merging Types

// type Admin = {
//   permissions: string[];
// }

// type AppUser = {
//   userName: string;
// }

// type AppAdmin = Admin | AppUser;

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

// speific with literal types

//let role: 'admin' | 'user' | 'editor';

//role = 'admin';
// role = 'test';

//Type Guards

type Role = 'admin' | 'user' | 'editor';
let role: Role;

function performAction(action: string, role: Role) {
  if (role === 'admin'){
    // ..
  }
}