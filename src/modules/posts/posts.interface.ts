export interface PostInterface{
    idPost? : number;
    titulo : string;
    contenido : string;
    contenidoResumen?: string;
    fechaCreacion? : Date;
    usuarioCreacion? : string;
}