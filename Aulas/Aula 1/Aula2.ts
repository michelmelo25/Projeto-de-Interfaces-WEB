//interfaces
interface Animal{
    andar(): void;
    getNome(): string;
}

class Gato implements Animal{
    private nome: string;
    constructor(nome: string){
        this.nome = nome;
    }

    andar(){
        console.log("O Gato Andou");
    }

    getNome(): string{
        return this.nome;
    }
}

class Cavalo implements Animal{
    private nome: string;
    constructor(nome: string){
        this.nome = nome;
    }

    andar(){
        console.log("O Cavalo Andou");
    }

    getNome(): string{
        return this.nome;
    }

    trote(){
        console.log("Trote");
    }
}

let gato = new Gato("Garfield");
gato.andar();
console.log(gato.getNome());

let cavalo = new Cavalo("Pé de Pano");

let animais:Animal[] = [];
animais.push(gato);
animais.push(cavalo);