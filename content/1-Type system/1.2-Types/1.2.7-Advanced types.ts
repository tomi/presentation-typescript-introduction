/**
 * Advanced types
 *
 * - Intersection types
 * - Union types
 * - Discriminated unions
 * - Mapped types
 * - Declaration spaces
 */

//#region Intersection types

// Combines multiple types into one, "AND"

interface Serializable {
  serialize(): string;
}

interface Loggable {
  log(data: string): void;
}

function serializeAndLog(obj: Loggable & Serializable) {
  obj.log(obj.serialize());
}

//#endregion

//#region Union types

// A type that is one of the defined types, "OR"

type stringOrNumber = string | number;

//#endregion

//#region String literals

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

//#endregion

//#region Discriminated union

// Aka "tagged unions" or "algebraic data types"
// - Types that have a common, singleton type property — the discriminant.
// - A type alias that takes the union of those types — the union.
// - Type guards on the common property.

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

// TODO: Add Triangle, and make exhaustive
// interface Triangle {
//   kind: "triangle";
//   side: number;
// }

// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }

//#endregion

//#region Mapped types

// Sometimes you need to create a new type from existing type

interface Person {
  name: string;
  age: number;
}

//#region Making a readonly and partial person

type ReadonlyPerson = Readonly<Person>;

type PartialPerson = Partial<Person>;

declare function freeze<T>(obj: T): Readonly<T>;

//#endregion

//#region Pick and Record

type NamePerson = Pick<Person, "name">;

type PointRecord = Record<"x" | "y", number>;

//#endregion

//#region keyof

// An indexed type query keyof T yields the type of permitted property names for T

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

// TODO: Use with person
let person: Person;
getProperty(person, "name");

//#endregion

//#endregion

export {};
