const leia = require('readline-sync');

let numero, i, encontrado = false
let listaNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

console.log('Vetor: ', listaNumeros);
numero = leia.questionInt('Digite o numero que voce quer encontrar: ');

for (i = 0; i < listaNumeros.length; i++) {
    if (numero === listaNumeros[i]) {
        console.log('A posicao desse numero e: ', i);
        encontrado = true;
        break;
    }
}

if (encontrado == false) {
    console.log('Numero nao encontrado!');
}