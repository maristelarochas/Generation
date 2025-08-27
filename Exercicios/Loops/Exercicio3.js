const leia = require('readline-sync');

let idade, continuar = true, listaIdade = [], contadorMenor21 = 0, contadorMaior50 = 0, i = 0

while (continuar) {
    listaIdade[i] = leia.questionInt('Digite uma idade: ');
    
    if (listaIdade[i] <= 0) {
        console.log('Digite uma idade maior que 0');
    }
    i++;
    
    continuar = leia.keyInYN('Deseja inserir mais uma idade? ');
}

for (idade of listaIdade) {
    idade > 50
        ? contadorMaior50++
        : idade < 21 && idade > 0
            ? contadorMenor21++
            : null
}

console.log('Total de pessoas menores de 21 anos: ', contadorMenor21);
console.log('Total de pessoas maiores de 50 anos: ', contadorMaior50);