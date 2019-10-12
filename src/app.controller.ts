import { Controller, Get, Render, UseGuards, Req } from '@nestjs/common';
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
  @Render('index')
  home(@Req() req): any {
    if(req.user){
      return {
            user:{
              id: req.user.id_usuario,
              username: req.user.username,
            }
            
      }
    }

    return
    // this.postService.obtenerPosts()
    // .then(resp =>{

    //   let posts : PostInterface[] = []
    //   resp.forEach(el => {
    //     posts.push({
    //       titulo: el.titulo,
    //       contenido: el.contenido,
    //       contenidoResumen: el.contenido.substring(0, 20) + '...'
    //     })
    //   });

    //   if(req.user){
    //     return {
    //           user:{
    //             id: req.user.id_usuario,
    //             username: req.user.username,
    //           }
    //     }
    //   }
  
    //   return { posts: posts }
    // }).catch(err => {})

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
