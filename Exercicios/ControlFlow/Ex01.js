const leia = require('readline-sync');

let numeroA, numeroB, numeroC, soma

numeroA = leia.questionInt('Digite o numero A: ');
numeroB = leia.questionInt('Digite o numero B: ');
numeroC = leia.questionInt('Digite o numero C: ');

soma = numeroA + numeroB;

if (soma > numeroC) {
    console.log('A soma A + B é maior do que C');
} else if (soma < numeroC) {
    console.log('A soma A + B é menor que C');
} else if (soma = numeroC) {
    console.log('A soma A + B é igual a C');
} else {
    ('Entrada invalida!');
}