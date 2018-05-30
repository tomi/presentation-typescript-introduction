/**
 * Overview
 *
 * - Typings are *optional*, JS is TS
 * - Types are annotated using `:TypeAnnotation` syntax
 */

//#region Types are annotated using `:TypeAnnotation` syntax

let num: number = 123;

function identity(num: number): number {
  return num;
}

//#endregion

//#region Types can be implicit

// TypeScript will try to infer as much type information as possible
let foo = 123;

// foo = "456"; // Error: cannot assign `string` to `number`

//#endregion

//#region Types are structural

interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

var point2D: Point2D = { x: 0, y: 10 };
var point3D: Point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point: Point2D) {
  /* do something */
}

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
// iTakePoint2D({ x: 1, y: 2, za: 10 }); // Expect if given as object literal
// iTakePoint2D({ x: 0 }); // Error: missing information `y`

//#endregion

//#region Declaration spaces

/**
 * TypeScript has 2 declaration spaces:
 * - Variable declaration space
 * - Type declaration space
 */

//#region Type declaration space

// These create type declarations
interface MyInterface {}
type MyType = {};

// They can be used as type annotations:
let a: MyInterface;
let b: MyType;

// They can't be use as variables:
// let aa = MyInterface; // Error
// let bb = MyType; // Error

//#endregion

//#region Variable declaration space

// Class create a variable AND type declaration
class Foo {}
let someVar = Foo;

// Variable declaration can't be used as a type
let someOtherVar = 123;
// let other: someOtherVar; // Error

// typeof returns the type of a variable
let anotherOther: typeof someOtherVar;

//#endregion

//#endregion

export {};
