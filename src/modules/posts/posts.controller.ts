import { Controller, Get, Post, Req, Body, UseGuards, Res, Param } from '@nestjs/common';
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
        .then(resp => {
            res.redirect('/crearpost')
        })
        .catch(err => {
            res.redirect('/')
        })
    }

    @Get(':id')
    public async verPost(@Param() param, @Req() req,  @Res() res : Response){
        try{
            let post = await this.postService.verPost(param.id)
            if(!post){
                return res.redirect('/')
            }

            let user = null;
            if(req.user){
                user = req.user
            }

            console.log(post)
            // console.log(user)
            console.log('-----------------------------')
            return res.render('verpost', {post, user})

        }catch(error){
            console.log(error)
            return res.redirect('/')
        }
        // .then(post => {
        //     console.log(post)
        //     if(!post){
        //         return res.redirect('/')
        //     }

        //     let user = null;
        //     if(req.user){
        //         user = req.user
        //     }

        //     return res.render('verpost', {post, user})
        // })
        // .catch(err => {
        //     console.log(err)
        //     return res.redirect('/')
        // })
    }

}
