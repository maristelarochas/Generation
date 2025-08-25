const leia = require('readline-sync');

let opcao, quantidade, valorTotal, produto

opcao = leia.questionInt('Digite o codigo do produto: ');
quantidade = leia.questionInt('Digite a quantidade comprada: ');

switch (opcao) {
    case 1:
        valorTotal = quantidade * 10;
        produto = 'Cachorro quente';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    case 2:
        valorTotal = quantidade * 15;
        produto = 'X-Salada';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    case 3:
        valorTotal = quantidade * 18;
        produto = 'X-Bacon';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    case 4:
        valorTotal = quantidade * 12;
        produto = 'Bauru';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    case 5:
        valorTotal = quantidade * 8;
        produto = 'Refrigerante';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    case 6:
        valorTotal = quantidade * 13;
        produto = 'Suco de laranja';
        console.log('Produto: ', produto, '\nValor total: ',
                        new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })
                        .format(valorTotal));
        break;
    default:
        console.log('Opcao inválida!');
}