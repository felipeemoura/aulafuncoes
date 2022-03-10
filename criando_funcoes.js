// function chamaNome() {
//     // return "Felipe";
//     nome = "Moura"
// }

// let nome = "Felipe";

// console.log("O nome antes é", nome)
// chamaNome();
// console.log("O nome depois é", nome);


// ---------------------------------------------------------------------------------------

// import fetch from 'node-fetch'

// async function pegarCep(cep) {
//     const response = await fetch(`http://viacep.com.br/ws/${cep}/json`);
//     const data = await response.json();
//     console.log(data);
// }

// pegarCep("53200037");


// -------------------------------- Função dentro de função e passando função por parâmtro -------------------------------------------------------


// function soma(a, b, fn) {
//     let soma = a + b;
//     let valor = fn(soma, 4);
//     return recebeNome("Henning", valor);
// }

// function divisao(a,b) {
//     return a / b;
// }

// function recebeNome(nome, valor) {
//     console.log("O nome é", nome, "e o valor é", valor);
// }

// soma(25, 75, divisao);


// ---------------------------------------------------------------------------------------

function somar(a,b) {
    return a + b;
}
function subtrair(a,b) {
    return a - b;
}
function multiplicar(a,b) {
    return a * b;
}
function dividir(a,b) {
    return a / b;
}

var calcular = {
    adicao : somar,
    subtracao : subtrair,
    multiplicacao : multiplicar,
    divisao : dividir
}

console.log(calcular.adicao(75,25));
console.log(calcular.subtracao(75,25));
console.log(calcular.multiplicacao(75,25));
console.log(calcular.divisao(75,25));