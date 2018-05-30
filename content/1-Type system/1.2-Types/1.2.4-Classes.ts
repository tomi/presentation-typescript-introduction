/**
 * Classes
 * - member modifiers
 * - shorthand members
 * - abstract classes
 * - declarations
 */

//#region Can implement interfaces

interface Loggable {
  log(item: string): void;
}

class Logger implements Loggable {
  log(item: string): void {}

  method() {}
}

// TODO: Create class Logger

//#endregion

//#region member modifiers

class Greeter {
  private a: string;

  protected b: string;

  public c: string;

  static d: string = "moi";

  constructor(message: string) {
    this.a = message;
  }

  greet() {
    return "Hello, " + this.a;
  }
}

// TODO: Instantiate and use Greeter
const instance = new Greeter("msg");

//#endregion

//#region Shorthand notation

class Person {
  constructor(public name: string) {}
}

const p = new Person("john");
console.log(p.name);

//#endregion

//#region Abstract classes

abstract class Animal {
  abstract makeSound(): void;

  // Can have implementation for some
  move(): void {
    console.log("roaming the earth...");
  }
}

// Can't be instantiated
// let ab = new Animal(); // Error

// TODO: Extend from Animal
class Dog extends Animal {
  makeSound() {}
}

//#endregion

//#region Class declaration creates multiple declarations

class Point {
  x: number;
  y: number;
  static defaultX: number;
  static defaultY: number;

  constructor(x: number = Point.defaultX, y: number = Point.defaultY) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

// "Instance" side of the class
let origo: Point;
origo = new Point(0, 0);

// "Static" side of the class
let pointMaker: typeof Point = Point;
pointMaker.defaultX = 100;
pointMaker.defaultY = 100;

let point = new pointMaker();

// typeof means
// “give me the type of the Point class itself”
// or
// “give me the type of the symbol called Point”

//#endregion

export {};
