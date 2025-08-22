const leia = require("readline-sync");

let numero1, numero2, numero3, numero4, diferenca;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");
numero3 = leia.questionInt("Digite o terceiro numero: ");
numero4 = leia.questionInt("Digite o quarto numero: ");

diferenca = (numero1 * numero2) - (numero3 * numero4);

console.log("Diferenca: ", new Intl.NumberFormat("pt-BR", {minimumFractionDigits: "1"}).format(diferenca));