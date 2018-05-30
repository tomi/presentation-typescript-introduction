/**
 * Basic types
 * - Primitive types
 * - Array
 * - Tuple
 * - Any
 * - Void
 * - Null and Undefined
 * - Never
 * - Type aliases
 * - Type assertions
 * - Type guards
 */

//#region Primitive types

// number
let num: number;
num = 123;
num = 123.456;
// num = "123"; // Error

// string
let str: string;
str = "123";
// str = 123; // Error

// boolean
let bool: boolean;
bool = true;
bool = false;
// bool = "false"; // Error

//#endregion

//#region Array

/**
 * Array
 */

let arr: number[] = [1, 2, 3];

arr[0] = 0;
// arr[0] = "false"; // Error

// Also supported, but not recommended
let arr2: Array<number> = [1, 2, 3];

//#endregion

//#region Tuple

/**
 * Tuple
 */

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// Underneath just an array, destructuring works
let [greeting, numValue] = x;

//#endregion

//#region Any

/**
 * Any
 *
 * - A way to opt-out of type checking
 * - Compatible with all types
 * - Useful when porting existing JS to TS
 */

let power: any;

// Takes any and all types
power = "123";
power = 123;

// Is compatible with all types
let number: number;
power = number;
number = power;

// Can be called
power.iSureDontExist();

//#endregion

//#region Void

/**
 * Void
 *
 * Opposite of `any`: the absence of having a type
 * Most often a return type of functions
 */

// Does not return a value
function warnUser(): void {
  alert("This is my warning message");
}

// Not really useful by itself, only null and undefined
// can be assigned to void type
let unusable: void = undefined;

//#endregion

//#region Null and Undefined

/**
 * Null and Undefined
 *
 * Are by default subtypes of all other types
 * With `--strictNullChecks`, they are only assignable to
 * their own type and void
 */

// This is ok by default
let numb: number = null;

// With --strictNullChecks
let notNullNumber: number = null; // Error
let numberOrNull: number | null = null; // OK

//#endregion

//#region Never

/**
 * Never
 *
 * A value that never occurs
 * E.g. return type of a function that throws
 */

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function failure() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

//#endregion

//#region Type aliases

/**
 * Type alias
 *
 * - Creates a name that refers to the type, not a new type
 * - Unlike interfaces, aliases can't be extended or implemented
 * - Editor intellisense also works differently
 * - Useful e.g. with union types or documentation
 */

// Give meaningful names
type ID = string;
type Schema = any;

// Union types
interface Dog {}
interface Cat {}
type Animal = Dog | Cat;

type Alias = {
  num: number;
};
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

//#endregion

//#region Type assertions

/**
 * Type assertions
 *
 * - Allows overriding a type, when you know better than the type system
 * - E.g. when porting code from JS to TS
 */

let foo = {};
// foo.bar = 123; // Error: property 'bar' does not exist on `{}`
// foo.bas = "hello"; // Error: property 'bas' does not exist on `{}`

interface Bar {
  bar: number;
  bas: string;
}
let bar = {} as Bar;
bar.bar = 123;
bar.bas = "hello";

// This syntax also works, but is not recommended (easy to mix up with JSX):

let baz = <Bar>{};

// It's not good to overuse assertions, as we want proper type checking

//#endregion

//#region Type guards

/**
 * Type guards
 *
 * - Allow narrowing down a type
 */

//#region null and undefined

// with --strictNullChecks
function f(arg: number | null) {
  arg.toFixed(); // Error

  if (!arg) {
    return;
  }

  arg.toFixed(); // No error
}

//#endregion

//#region typeof

function doSome(x: number | string) {
  if (typeof x === "string") {
    // It's a string
    x.substr(1);
  } else {
    // It's a number
    x.toFixed(10);
  }

  // x.substr(1);
  // x.toFixed(10);
}

//#endregion

//#region instanceof

class A {
  a = 123;
  common = true;
}

class B {
  b = "123";
  common = true;
}

function doStuff(arg: A | B) {
  if (arg instanceof A) {
    console.log(arg.a);
    // console.log(arg.b);
  }
  if (arg instanceof B) {
    // console.log(arg.a);
    console.log(arg.b);
  }

  console.log(arg.common);
}

//#endregion

//#region User defined type guards

function isA(arg: any): arg is A {
  return arg.a !== undefined;
}

function myStuff(arg: A | B) {
  if (isA(arg)) {
    console.log(arg.a);
  }
}

//#endregion

//#endregion

export {};
