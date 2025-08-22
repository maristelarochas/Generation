const leia = require('readline-sync');

let salario = leia.questionInt("Digite o salário: R$ ");
let abono = leia.questionInt("Digite o abono: R$ ");

let novoSalario = salario + abono;

console.log("Novo salário: ", new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                            })
                            .format(novoSalario));