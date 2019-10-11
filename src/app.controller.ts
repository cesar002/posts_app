import { Controller, Get, Render, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './modules/auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home(@Req() req): any {
    if(req.user){
      return {user:{
            id: req.user.id_usuario,
            username: req.user.username,
          }}
    }

    return
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
