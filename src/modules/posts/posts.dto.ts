export class PostDTO{
    public readonly idPost? : number;
    public readonly titulo : string;
    public readonly contenido : string;

    constructor(titulo : string, contenido : string){
        this.titulo = titulo;
        this.contenido = contenido;
    }

}