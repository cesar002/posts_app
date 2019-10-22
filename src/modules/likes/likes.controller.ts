import { Controller, Post, Body, Param, Req } from '@nestjs/common';

import { LikesDTO } from './likesdto.dto'


@Controller('likes')
export class LikesController {

    @Post('agregar')
    public agregarLike(@Body() likesDTO : LikesDTO, @Req() req){

    }

}
