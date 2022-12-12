#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.calculator = void 0;
function calculator(num1, num2, op) {
    var result = [num1, num2];
    if (op.localeCompare(" Add ") == 0) {
        result[2] = num1 + num2;
    }
    else if (op.localeCompare(" Multiply ") == 0) {
        result[2] = num1 * num2;
    }
    else if (op.localeCompare(" Divide ") == 0) {
        result[2] = num1 / num2;
    }
    else if (op.localeCompare(" Subtract ") == 0) {
        result[2] = num1 - num2;
    }
    else {
        result[2] = -1;
    }
    return result;
}
exports.calculator = calculator;
