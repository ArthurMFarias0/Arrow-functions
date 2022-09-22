"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var calc = function (peso, altura) {
    var imc = peso / (Math.pow(altura, 2));
    return imc;
};
console.log(calc(50, 1.5));
