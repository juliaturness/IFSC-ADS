// Crie uma classe abstrata para criar objetos da classe Animal:
// ■ Os objetos devem ter as propriedades privadas "tipo", "nome" e "som";
// ■ A classe deve ter getters e setters para as propriedades;
// ■ A classe deve ter os métodos "emitirSom()", "locomover()",
// "comer()" e "informarTipo()".
// ■ Crie um método estático na classe Animal que retorna a quantidade de
// animais criados.

class Animal{
    #tipo
    #nome
    #som

    constructor(){
        if (new.target === Animal){
            throw new Error ('A classe Animal é abstrata e não pode ser instanciada!')
        }
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(tipo){
        return this.#tipo = tipo;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        return this.#nome = nome;
    }

    get som(){
        return this.#som;
    }

    set som(som){
        return this.#som = som
    }
    
    emitirsom(){
        throw new Error ("Este método deve der implementado")
    }
    locomover(){
        throw new Error ("Este método deve der implementado")
    }
    comer(){
        throw new Error ("Este método deve der implementado")
    }
    informatipo(){
        throw new Error ("Este método deve der implementado")
    }
    static quantidadeAnimais = 0;
    static getquantidadeAnimais(){
        return Animal.quantidadeAnimais;
    }
}
   

    class Gato extends Animal{
        constructor(nome){
            super();
            this.tipo = 'Gato';
            this.nome = nome;
            this.som = 'Mia'
        }

        emitirsom(){
            console.log("Miau")
        }

        locomover(){
            console.log(`${this.nome} correu`)
        }
        comer(){
            console.log(`${this.nome} comeu`)
        }

        informatipo(){
            console.log(`${this.nome} é um ${this.tipo}`)
        }

    }
    class Cachorro extends Animal{
        constructor(nome){
            super();
            this.tipo = 'Cachorro';
            this.nome = nome;
            this.som = 'Late'
        }

        emitirsom(){
            console.log("Au")
        }

        locomover(){
            console.log(`${this.nome} correu`)
        }
        comer(){
            console.log(`${this.nome} comeu`)
        }

        informatipo(){
            console.log(`${this.nome} é um ${this.tipo}`)
        }

    }

    let Preto = new Gato ('Preto')
    let lilica = new Cachorro ('lilica repilica')

    Preto.comer();
    Preto.locomover();
    Preto.informatipo();

// 2. Crie as classes de três animais diferentes que herdam da classe Animal:
// ■ Cada classe deve implementar os métodos de acordo com o tipo de
// animal;
// ■ Cada classe deve ter um método construtor que define o nome, o tipo e
// o som do animal.

// 3. Crie um objeto de cada uma das classes de animais criadas e chame os
// métodos de cada objeto.