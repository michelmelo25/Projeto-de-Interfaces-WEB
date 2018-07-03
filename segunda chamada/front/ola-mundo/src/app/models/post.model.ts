export class Post {
    id: any;
    nomePessoa: string;
    texto: string;
    qtdLikes: number;

    constructor(id: number, nomePessoa: string, texto: string, qtdLikes: number) {
        this.id = id;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.qtdLikes = qtdLikes;
    }
}