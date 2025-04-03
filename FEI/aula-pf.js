let numeros = [5, 4, 3, 2, 1, 11];
console.log(numeros);

// numeros.sort((a,b)=> a-b);


const sort = (a, ...args) => {
    const b= [...a];
    return b.sort(...args);
}

const op = (a, b) => a - b;

const oo = sort(numeros, op)
console.log(numeros);
console.log(oo);



// 1. Escreva uma função pura que recebe um array de números e retorna um novo array
// contendo os quadrados dos números, sem modificar o array original.
// ■ utilize programação imperativa
// ■ refatore para programação funcional

function quadrado(array){
    let quadrado = [];
    for (let i = 0; i < array.length; i++) {
    quadrado[i].push(array[i]**2);        
    }
    return quadrado
}

function quadradofunc(array){
    return array.map(n => n ** 2)
}
console.log(quadradofunc(numeros))


// 2. Implemente uma função pura que recebe uma lista de objetos representando
// produtos (com nome e preço) e retorna um novo array com o preço de cada produto
// aumentado em 10%, sem alterar o array original.

const produtos = [
    {
        nome: "sabonete",
        preco: 3
    },
    {
        nome: "detergente",
        preco: 5

    },
    {
        nome: "picanha",
        preco: 100

    }
]

const aumentarpreco = itens =>{

       return itens.map(item => {
            return {
                nome: item.nome,
                preco: (item.preco * 1.1).toFixed(2)
            }
})
}

console.log(aumentarpreco(produtos))


// 3. Usando reduce, crie uma função que receba um array de números e retorne o maior
// elemento.

const maiorElemento = array =>
    array.reduce((maior, numero) => numero > maior ? numero : maior);

console.log(maiorElemento(numeros))



// 4. Dado um array de números, crie uma função que use map, filter e reduce para
// retornar a soma de todos os números pares elevados ao quadrado.