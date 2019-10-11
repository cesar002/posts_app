import { Controller, Get, Post, Req, Body, UseGuards, Res } from '@nestjs/common';
import { Response } from 'express'

import {PostDTO} from './posts.dto'
import {PostsService} from './posts.service'
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('posts')
export class PostsController {

    constructor(
        private readonly postService : PostsService
    ){}

    @Post('/crear')
    @UseGuards(AuthenticatedGuard)
    crearPost(@Body() newPost : PostDTO, @Req() req, @Res() res : Response){
        this.postService.crearPost({titulo: newPost.titulo, contenido: newPost.contenido}, req.user)
        .then(res => {
            res.redirect('/crearpost')
        })
        .catch(err => {
            res.redirect('/')
        })
    }

}
