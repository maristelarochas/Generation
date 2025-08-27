const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, media, entrada

nota1 = leia.questionInt("Digite a primeira nota: ");
nota2 = leia.questionInt("Digite a segunda nota: ");
nota3 = leia.questionInt("Digite a terceira nota: ");
nota4 = leia.questionInt("Digite a quarta nota: ");

media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Media final: ", media);