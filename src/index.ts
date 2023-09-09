// Describing an interface for object shape

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Shaaibu",
  id: 12,
};

// interface declaration with classes

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userone: User = new UserAccount("Murphy", 1);

// Unions
type Mybool = true | false;

let IsPositive: Mybool = true;

// A popular use-case for union types is to describe 
// the set of string or number literals that a value is
//  allowed to be:

type WindowStates = 'open' | 'closed' | 'minimal';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumberUnderTen = 1 | 3 |5 | 7 | 9;


// Unions provide a way to handle different types too. 
// For example, you may have a function that takes an 
// array or a string:

function getLength(obj: string | string[]) {
    return obj.length;
}

// Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;

// You can declare your own types that use generics:

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// declare const backpack: Backpack<string>;

// const object = backpack.get();

// backpack.add('sule')

// structural type system

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26, };
logPoint(point);

// Structural patterns in classes

class Virtual {
    x: number;
    y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y
    }
}

const newPoint = new Virtual(13, 33)
console.log(newPoint);