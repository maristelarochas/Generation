const leia = require('readline-sync');

//obs: não finalizado.

let indiceLinha, indiceColuna, somaPrincipal, diagonalPrincipal = [];
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.table(matriz);

for (indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
    for (indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++) {
        if (indiceLinha == indiceColuna)
        {
            diagonalPrincipal.push = (matriz[indiceLinha][indiceColuna]);
            somaPrincipal = somaPrincipal + matriz[indiceLinha][indiceColuna];
        }
    }
}

console.log('Elementos da diagonal principal: ', diagonalPrincipal.join(" "));