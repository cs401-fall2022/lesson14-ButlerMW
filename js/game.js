"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnRed = exports.hello = void 0;
/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
exports.hello = hello;
;
/**
* turns demo red
*/
function turnRed() {
    if (document != null) {
        let c = document.getElementById("demo").style.color;
        console.log(c);
        if (c === 'red') {
            document.getElementById("demo").style.color = "black";
        }
        else {
            document.getElementById("demo").style.color = "red";
        }
    }
}
exports.turnRed = turnRed;
