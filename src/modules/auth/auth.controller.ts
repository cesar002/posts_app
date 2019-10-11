import { Controller, Get, Post, Request, Res, Render, UseGuards, Body, UseFilters, Req } from '@nestjs/common';
import { Response } from 'express'

import {LoginGuard} from './login.guard'
import {AuthenticatedGuard} from './authenticated.guard'
import {AuthExceptionFilter} from './authExceptions.filter'
import {UsuariosDTO} from '../usuarios/usuarios.dto'

@Controller('auth')
@UseFilters(AuthExceptionFilter)
export class AuthController{

    @UseGuards(LoginGuard)
    @Post('/login')
    login(@Body() user : UsuariosDTO, @Res() res : Response){
        res.redirect('/');
    }

    @Get('/login')
    @Render('login')
    loginIndex(@Request() req){
        console.log(req.user)
        return;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/logout')
    logout(@Request() req, @Res() res : Response){
        req.logout();
        res.redirect('/')
    }



}