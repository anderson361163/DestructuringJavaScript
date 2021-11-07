// Extração dados de arrays, objetos declarações mais faceis e mais funcionais

const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];

let numeros = [numerosPares, numerosImpares];

//vai imprimir um array de arrays
console.log('---------------');
console.log('>>Apresenta um Array de arrays<<');
console.log(numeros);

//remove 2 elementos começando do indice 0 do array
numeros.splice(0,2);

numeros = [...numerosPares, ...numerosImpares];

console.log('---------------');
console.log('>>Apresenta os valores dos dois arrays no mesmo array<<');
console.log(numeros);
console.log('---------------');

let num1 = 1;
let num3 = 3;
console.log('>>Declaração individual das váriaveis<<');
console.log(num1, num3);
console.log('---------------');

let [num2, num4] = [2,4];
console.log('>>Captura os dados pelo indice no array maior<<');
console.log(num2, num4);

console.log('---------------');

let [num5, num7, ...outrosNumeros] = [5,7, 9, 11];
console.log('>>Captura os dados do array e os demais coloca em outra variavel<<');
console.log(num5, num7, ...outrosNumeros);

console.log('---------------');

let [nome1 = 'Ju'] = []; 

console.log('>>Declaracao inicial para evitar um unidefined');
console.log(nome1);

console.log('---------------');

console.log('>>Criar objetos com base em outras instâncias<<');

const pessoa = {
    nome: "Ju",
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 11999999999
}

console.log(pessoa);
//console.log('\n');
console.log(pessoaComTelefone);

console.log('---------------');

console.log('>>pegar valores de um objeto e colocar dentro de uma váriavel<<');

const {idade} = pessoa;

console.log(idade);

console.log('---------------');

console.log('>>Recebe uma objeto da qual tem que ter atributos de nome e idade<<');

function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa);

console.log('---------------');