/**
 * Interfaces
 *
 * - Core way to compose multiple types into single named annotation
 */

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//#region Optional properties

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

//#endregion

//#region Readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error

//#endregion

//#region Index signatures

interface Indexer {
  [key: string]: number;
  // Can have named members
  x: number;
  // But they need to have same type
  // y: string;
}

let i: Indexer = {
  x: 1,
  y: 20
};

// i["key"] = true; // Error: wrong type

//#endregion

//#region Extending

interface Base {
  allYour: string;
}

interface Extended extends Base {
  areBelongToUs: string;
}

let zeroWing: Extended;

//#endregion

export {};
