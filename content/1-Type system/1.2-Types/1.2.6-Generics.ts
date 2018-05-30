/**
 * Generics
 *
 * - For components that work with variety of types
 * - Is defined using one or more type variables
 * - Actual type is _instantiated_, when type variable(s) is/are bound
 */

//#region Simple example

function identity<T>(arg: T): T {
  return arg;
}

let outExplicit = identity<string>("myString");

let outInferred = identity("myString");

//#endregion

//#region Can have constraints

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property
  console.log(arg.length);
  return arg;
}

//#endregion

//#region Example: defining array's filter with generics

// TODO

// How it is used
// filter([1, 2, 3], x => x > 2);

//#endregion

//#region Example: defining array's map with generics

function map<T, U>(collection: T[], cb: (item: T) => U): U[] {
  const result: U[] = [];

  for (const item of collection) {
    result.push(cb(item));
  }

  return result;
}

// How it is used
map([1, 2, 3], x => x * 2);

//#endregion

//#region Instantiation

interface Fetcher<T> {
  (url: string): Promise<T>;
}

interface User {
  name: string;
}

type UserFetcher = Fetcher<User>;

//#endregion

/**
 * Generics - summary
 *
 * - For components that work with variety of types
 * - Is defined using one or more type variables
 * - Actual type is _instantiated_, when type variable(s) is/are bound
 * - Can have constraints
 */

export {};
