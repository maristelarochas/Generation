const leia = require("readline-sync");

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido

salarioBruto = leia.questionInt("Digite o salário bruto: R$ ");
adicionalNoturno = leia.questionInt("Digite o adicional noturno: R$ ");
horasExtras = leia.questionInt("Digite o valor das horas extras: R$ ");
descontos = leia.questionInt("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salario liquido: ", new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                            })
                            .format(salarioLiquido));