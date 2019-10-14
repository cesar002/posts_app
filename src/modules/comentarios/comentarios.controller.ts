import { Controller, Get, Post, Req, Body, UseGuards, Res, Param } from '@nestjs/common';
import { Response } from 'express'
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ComentarioDTO } from './comentarioDTO.dto';
import { ComentariosService } from './comentarios.service';

@Controller('comentarios')
export class ComentariosController {

    constructor(
        private readonly comentariosService : ComentariosService
    ){}

    @Post('agregarComentario/:idPost')
    @UseGuards(AuthenticatedGuard)
    agregarComentario(@Param() param, @Body() comentarioDTO : ComentarioDTO, @Req() req, @Res() res : Response){
        if(!comentarioDTO.comentario || comentarioDTO.comentario == ""){
            return res.redirect(`/posts/${param.idPost}`);
        }
        this.comentariosService.agregarComentario(comentarioDTO.comentario, param.idPost, req.user)
        .then(comment => {
            return res.redirect(`/posts/${param.idPost}`)
        })
        .catch(err =>{
            return res.redirect(`/posts/${param.idPost}`);
        })
    }

    @Post('agregarComentario/reply/:idComment/:idPost')
    @UseGuards(AuthenticatedGuard)
    public async agregarReply(@Param() param, @Body() comentarioDTO : ComentarioDTO, @Req() req, @Res() res : Response){
        if(!comentarioDTO.comentario || comentarioDTO.comentario == ""){
            return res.redirect(`/posts/${param.idPost}`);
        }

        try{
            // console.log(comentarioDTO)
            this.comentariosService.agregarComentarioReply(comentarioDTO.comentario, param.idPost, param.idComment, req.user)
            return res.redirect(`/posts/${param.idPost}`)
        }catch(error){
            console.log(error)
            return res.redirect(`/posts/${param.idPost}`)
        }
    }

}
