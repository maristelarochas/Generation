const leia = require('readline-sync');

let num1, num2;

num1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
num2 = leia.questionInt('Digite o segundo numero do intervalo: ');

if (num1 >= num2) {
    console.log('Intervalo inválido, \no primeiro valor deve ser maior que o segundo valor!');
}

for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, ' é multiplo de 3 e 5');
    }
}