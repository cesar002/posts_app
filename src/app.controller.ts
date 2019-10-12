import { Controller, Get, Render, UseGuards, Req, Res } from '@nestjs/common';
import { Response } from 'express'

import { AppService } from './app.service';
import { AuthenticatedGuard } from './modules/auth/authenticated.guard';
import { PostsService } from './modules/posts/posts.service';
import { PostInterface } from './modules/posts/posts.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService : PostsService
  ) {}

  @Get()
  // @Render('index')
  home(@Req() req, @Res() res : Response): any {

    this.postService.obtenerPosts()
    .then(posts => {
        if(req.user){
          return res.render('index',{
            user:{
              id: req.user.id_usuario,
              username: req.user.username,
            },
            posts: posts
          })
        }

        return res.render('index', {posts: posts})
    })
    .catch(err => {
      return res.render('index',{})
    })
  }

  @Get('/registrarse')
  @Render('registrarse')
  registrarse() : any{
    return
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/crearpost')
  @Render('escribirPost')
  crearPost(@Req() req) : any{
    return{
      user:{
        id: req.user.id_usuario,
        username: req.user.username,
      }
    }
  }

}
