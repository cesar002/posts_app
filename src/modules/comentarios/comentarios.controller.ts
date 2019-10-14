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
    agregarComentario(@Param() param, @Body() cometarioDTO : ComentarioDTO, @Req() req, @Res() res : Response){
        if(!cometarioDTO.comentario || cometarioDTO.comentario == ""){
            return res.redirect(`/posts/${param.idPost}`);
        }
        this.comentariosService.agregarComentario(cometarioDTO.comentario, param.idPost, req.user)
        .then(comment => {
            return res.redirect(`/posts/${param.idPost}`)
        })
        .catch(err =>{
            return res.redirect(`/posts/${param.idPost}`);
        })
    }

}
