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
    var _a;
    if (document != null) {
        let c = (_a = document.getElementById("demo")) === null || _a === void 0 ? void 0 : _a.style.color;
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
