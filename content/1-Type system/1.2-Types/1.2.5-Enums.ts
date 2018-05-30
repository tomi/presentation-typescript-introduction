/**
 * Enums
 *
 * - A set of named constants
 */

//#region Numeric enums

enum Direction {
  Up, // Initialized with 0
  Down // = 1
}

enum Response {
  No = 10,
  Yes // = 11
}

const dir = Direction.Up;

//#endregion

//#region String enums

enum Animal {
  Dog = "dog",
  Cat = "cat"
}

//#endregion

//#region Enums at runtime

// Enums are real objects that exist at runtime
enum MyDirection_ {
  Up,
  Down
}

// will transpile to

var MyDirection;
(function(MyDirection) {
  MyDirection[(MyDirection["Up"] = 0)] = "Up";
  MyDirection[(MyDirection["Down"] = 1)] = "Down";
})(MyDirection || (MyDirection = {}));

// Which allows enums to support reverse lookup
let d = MyDirection_.Up;
let nameOfUp = MyDirection_[d]; // = "Up"

//#endregion

//#region Const enums

// Const enums are removed during compilation and members are inlined

const enum _MyDirection {
  Up,
  Down
}

const _value = _MyDirection.Up;

// will be transpiled to

var value = 0 /* Up */;

//#endregion

/**
 * Enums - Summary
 *
 * - A set of named constants
 * - Can be number of string based
 * - Support reverse mapping, unless defined as `const`
 * - Are transpiled into real objects, unless `const` is used
 */

export {};
