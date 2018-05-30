/**
 * Modules
 *
 * - Exports
 * - Imports
 * - Global declarations
 * - Namespaces
 * - Ambient declarations
 * - Writing declarations
 */

// By default, all code is in the _global_ namespace, see foo.ts and bar.ts

// Using import or export create a local scope

//#region Exports

// Named export
export function a() {}

// export statement
function b() {}
export { b };

// Re-export
export * from "../1.2-Types/1.2.5-Enums";

//#region Default export

export default "I am default export";

// Default exports are discouraged:

// If you refactor default export, it will not be renamed in imported files
// If you end up needing to export more stuff you have to juggle the import syntax.
//
// Plus these bonus points:
//   https://basarat.gitbooks.io/typescript/content/docs/tips/defaultIsBad.html

//#endregion

//#endregion

//#region Imports

// Import only named stuff
import { exportA } from "./module";

// Import all
import * as myModule from "./module";

// Import for side-effects
import "./module";

//#endregion

//#region Global declarations

/**
 * Sometimes it's useful to have `globals.d.ts` file for certain types
 * _magically_ appear everywhere. Especially when migrating from JS.
 */

//#endregion

//#region Namespaces

// Not really needed anymore, as we have file based modules.
// --> Don't use

namespace Utility_ {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.error(msg);
  }
}

// will be transpiled to

var Utility;
(function(Utility) {
  function log(msg) {
    console.log(msg);
  }
  Utility.log = log;
  function error(msg) {
    console.error(msg);
  }
  Utility.error = error;
})(Utility || (Utility = {}));

//#endregion

//#region Ambient declarations

/**
 * Ambient declarations = declarations that don't define an implementation
 * - Typically placed in .d.ts files
 * - Use the `declare` keyword
 *   --> Defines a variable that may not have originated from a .ts file
 *   --> A promise to the type checker, "these will exist in the runtime"
 */

declare var myLibrary; // Makes a myLibrary global

//#endregion

//#region Writing declarations for existing JS code

// Excellent place to start is:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates.html

//#region Example
// TODO: Example how to type a library
// validate library:
// declare var validate;

var user = validate({
  name: {
    type: "string",
    required: true,
    message: "Name is required."
  },
  email: {
    type: "string",
    required: true,
    match: /+\@.+\..+/,
    message: "Email must be valid."
  },
  address: {
    street: {
      type: "string",
      required: true,
      message: "Street is required."
    },
    city: {
      type: "string",
      required: true,
      message: "City is required."
    }
  }
});

const obj = {};
user.assert(obj);
var errors = user.validate(obj);

//#endregion

//#endregion
