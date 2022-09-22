import PromptSync = require('prompt-sync');

const prompt = PromptSync()

const calc = (peso: number, altura:number) => {
    const imc = peso / (Math.pow(altura,2))
    return imc
}

console.log(calc(80, 2.0));