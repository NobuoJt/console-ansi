"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleAnsi = /** @class */ (function () {
    function ConsoleAnsi() {
    }
    ConsoleAnsi.reset = "\u001B[0m";
    ConsoleAnsi.black = "\u001B[30m";
    ConsoleAnsi.red = "\u001B[31m";
    ConsoleAnsi.green = "\u001B[32m";
    ConsoleAnsi.lightYellow = "\u001b[93m";
    ConsoleAnsi.yellow = "\u001b[33m";
    ConsoleAnsi.yellowBackground = "\u001b[43m";
    ConsoleAnsi.blue = "\u001b[34m";
    ConsoleAnsi.purple = "\u001b[35m";
    ConsoleAnsi.cyan = "\u001b[36m";
    ConsoleAnsi.white = "\u001b[37m";
    ConsoleAnsi.bold = "\u001b[1m";
    ConsoleAnsi.unbold = "\u001b[21m";
    ConsoleAnsi.underline = "\u001b[4m";
    ConsoleAnsi.stopUnderline = "\u001b[24m";
    ConsoleAnsi.blink = "\u001b[5m";
    return ConsoleAnsi;
}());
exports.default = ConsoleAnsi;
