import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';

  @Catch(HttpException)
  export class AuthExceptionFilter implements ExceptionFilter{

      catch(exception: any, host: ArgumentsHost) {
        let ctx = host.switchToHttp();
        let response = ctx.getResponse<Response>();
        let request = ctx.getRequest<Request>();

        if(exception instanceof UnauthorizedException || exception instanceof ForbiddenException){
            request.flash('loginError', 'Intente nuevamente');
            response.redirect('/')
        }else{
            response.redirect('/error')
        }
        

      }

  }