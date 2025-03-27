function criaCarro(ano, modelo, marca){
    let carro = Object.create(criaCarro.classe);
    carro.ano = ano;
    carro.modelo = modelo;
    carro.marca = marca; 
     return carro
}
criaCarro.classe = {
    andar: function(){
        console.log ("vrum vrum");
    },
    buzinar: function(){
        console.log("bi bi")
    },
    virar: function(direção){
        console.log(`O carro virou para ${direção}`);

    }
}
 let carrao = criaCarro(2024, "honda civic", "honda");
 carrao.andar();
 carrao.buzinar();
 carrao.andar();



 function Animal ( tipo, nome, som){
    this.tipo = tipo;
    this.nome = nome;
    this.som = som;
}
Animal.prototype = {
    emitirsom: function(){
        console.log(`O ${this.nome} faz ${this.som}`)
    },
    locomover(){
        console.log(`O ${this.nome} se locomove`)
    },
    comer(){
        console.log(`Nham Nham`)
    }
}

let bicho = new Animal("gato","preto","miau miau")
bicho.comer();
bicho.emitirsom();
bicho.emitirsom();

class livro{
    constructor(titulo, autor, ano){
        this.titulo=titulo;
        this.autor = autor;
        this.ano = ano;
    }
    emprestar(){
        console.log(`O livro ${this.titulo} foi emprestado`)

    }
    devolver(){
        console.log(`O livro ${this.autor} foi devolcido`)
    }
}
let tomo = new livro ("Orgulho e Preconceito", "Jane Austen", "velho")
tomo.emprestar();