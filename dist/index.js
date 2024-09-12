"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.console_ansi = void 0;
var console_ansi = /** @class */ (function () {
    function console_ansi() {
        this.RESET = "\u001B[0m";
        this.BLACK = "\u001B[30m";
        this.RED = "\u001B[31m";
        this.GREEN = "\u001B[32m";
        this.LIGHT_YELLOW = "\u001B[93m";
        this.YELLOW = "\u001B[33m";
        this.YELLOW_BACKGROUND = "\u001B[43m";
        this.BLUE = "\u001B[34m";
        this.PURPLE = "\u001B[35m";
        this.CYAN = "\u001B[36m";
        this.WHITE = "\u001B[37m";
        this.BOLD = "\u001B[1m";
        this.UNBOLD = "\u001B[21m";
        this.UNDERLINE = "\u001B[4m";
        this.STOP_UNDERLINE = "\u001B[24m";
        this.BLINK = "\u001B[5m";
    }
    return console_ansi;
}());
exports.console_ansi = console_ansi;
