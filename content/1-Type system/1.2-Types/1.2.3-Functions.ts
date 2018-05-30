/**
 * Functions
 * - optional parameters
 * - rest parameters
 * - typing this
 * - overloading
 *
 * Callable types
 */

//#region Functions

// Named function
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous function
const myAdd = (x: number, y: number): number => x + y;

//#region Optional parameters

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let result1 = buildName("Bob"); // Okay
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
let result4 = buildName("Bob", undefined); // okay and returns "Bob"

//#endregion

//#region Rest parameters

function buildLongName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildLongName("Joseph", "Samuel", "Lucas", "MacKinzie");

//#endregion

//#region Typing `this`

interface Point {
  x: number;
  y: number;
}

function f() {
  // By default this is any.
  // Can be changed with --noImplicitThis
  this.x = 10;
}

function g(this: Point) {
  // Explicitly tell this is of type Point
  this.x = 10;
}

// Makes `this` unusable
function h(this: void) {
  // this.x = 1; // Error
}

//#endregion

//#region Overloading

function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the
// cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
  // Actual implementation
}

//#endregion

//#endregion

//#region Callable types

// Type can be made callable by defining a call signature
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// is equivalent of
type SearchFuncType = (source: string, subString: string) => boolean;

// Newable is a special type of callable type annotation,
// it can be invoked with `new`
interface iHazConstructor {
  new (): string;
}

declare const Foo: iHazConstructor;
const bar = new Foo(); // bar is inferred to be of type string

//#endregion

export {};
