"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkModeButton = exports.hello = void 0;
// Testing out functionality
console.log("Hello World!!");
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
function darkModeButton() {
    var _a;
    if (document != null) {
        // console.log(document.getElementById("demo").style.color);
        let c = document.getElementById("demo").style.color;
        console.log(c);
        if (c === 'white') {
            document.getElementById("demo").style.color = "black";
            document.getElementById("demo").style.backgroundColor = "white";
            document.getElementById("demo").textContent = "Light Mode";
            (_a = document.getElementById("dark-mode-card")) === null || _a === void 0 ? void 0 : _a.style.backgroundColor = "rgb(49,49,49)";
            document.body.style.backgroundColor = "rgb(38,38,38)";
            var elements = document.getElementsByClassName("dark-mode");
            for (var i = 0; i < elements.length; ++i) {
                elements[i].style.color = "white";
            }
            // document.querySelectorAll("dark-mode").for
        }
        else {
            // var elements = document.getElementsByClassName("dark-mode");
            // for(var i = 0; i < elements.length; ++i)  {
            //   elements[i].style.size = "100px";
            // }
            // document.getElementById("dark-mode").style.color = "white";
            document.getElementById("demo").style.color = "white";
            document.getElementById("demo").style.backgroundColor = "rgb(38,38,38)";
            document.getElementById("demo").textContent = "Dark Mode";
            document.getElementById("dark-mode-card").style.backgroundColor = "lightgrey";
            // document.getElementById("container").style.backgroundColor = "rgb(49,49,49)";
            document.body.style.backgroundColor = "white";
            var elements = document.getElementsByClassName("dark-mode");
            for (var i = 0; i < elements.length; ++i) {
                elements[i].style.color = "black";
            }
        }
    }
}
exports.darkModeButton = darkModeButton;
