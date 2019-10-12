import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { UsuariosDTO } from './usuarios.dto'

import { UsuariosService } from './usuarios.service'

@Controller()
export class UsuariosController {

    constructor(
        private readonly userService : UsuariosService
    ){}

    @Post('/registrar')
    @Redirect('/registrarse', 301)
    async registrarse(@Body() newUser : UsuariosDTO){
        this.userService.registrarUser(newUser.username, newUser.password)
        .then(res => {
            return {url: '/'}
        })
        .catch(err => {
            return
        })
    }


}
