// 1. Dado um array que pode conter números e subarrays, implemente uma função
// recursiva que percorra o array e retorne a soma de todos os números. Não utilize loops.

let array = [1, 2, [3, 4], 5, [[6, 7], 8], 9]
let resultado = 0;
for (let i = 0; i < array.length; i++) {
    resultado += array[i]
}
console.log(resultado)

function somaArrayAninhado(arr) {
    // let soma = 0
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(array[i])) {
    //         resultado += somaArrayAninhado(arr[i])
    //     } else if (typeof arr[i] == 'number') {
    //         resultado == arr[i];
    //     }
    // }
    // return resultado

    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc + somaArrayAninhado(item);
        } else if (typeof item === 'number'){
         return   acc + item;
        }

    } , 0);
}

console.log("1 - " + somaArrayAninhado(array))

// 2. Crie uma função que receba duas funções como argumento e retorne uma nova
// função que é a composição das duas.

function soma(a, b){
    return a + b 
}
function multiplica(b, c){
    return b * c;
}

function a (f, g){
    return function(x){
        return f(g(x))
    }
}
function dobro(x){
    return x*2;
}
function quadrado(x){
    return x **2;
}
 
let dobrodoQ = a(dobro, quadrado)    

console.log("2 - " + dobrodoQ(3))



// 3. Implemente uma função que gera uma sequência numérica crescente com base em um
// número inicial e um passo, ambos passados como parâmetros. Use closures para manter
// o estado da sequência.

function seq (inicio, passo) {
    let valor = inicio - passo;

    return function (){
        valor += passo;
        return valor
    }
}
let sequencia = seq(1,10)

console.log("3 - " + sequencia())
console.log("3 - " + sequencia())
console.log("3 - " + sequencia())
console.log("3 - " + sequencia())


// 4. Crie uma função que aceite um número e retorne uma nova função que também aceita
// um número. O produto dos dois números deve ser retornado.

function multiplicar(x){
    return function(y){
        return x * y;
    }
}

let multi = multiplicar(10);
console.log("4 - " + multi(3))

// 5. Escreva uma função recursiva que percorra todos os elementos do DOM e retorne
// uma lista com os textos de todos os elementos <p>. Não utilize loops.

function percorrerDOM(elemento){
    let textos = [];

    if(elemento.tagName.toLowerCase() === 'p') {
    textos = textos.concat(elemento.textContente)
}
    let filhos = elemento.children;
    for (let i = 0; i < filhos.length; i++) {
        textos = textos.concat(percorrerDOM(filhos[i]));
    }
}

// 6. Crie funções que filtrem uma lista de elementos com base em um critério (por
// exemplo, o texto que contenham) e, em seguida, transformem esses elementos
// aplicando uma função de estilo. Use composição para encadear as operações.


// 7. Crie uma função que gere um contador de cliques para um botão. Sempre que o botão
// for clicado, a contagem deve ser incrementada e exibida dentro do botão. Use closures
// para manter o estado da contagem.


// 8. Crie uma função curried que aceite o nome de um atributo e retorne uma nova função
// que altera o valor desse atributo em um elemento específico do DOM.