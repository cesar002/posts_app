import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from 'express-handlebars';
import * as session from 'express-session';
import flash = require('connect-flash');
import * as passport from 'passport';


async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '.', 'public/view'))
  app.setViewEngine('hbs')

  app.use(session({
    secret: 'NEST POSTS',
    resave: false,
    saveUninitialized: false,
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())

  await app.listen(3000)
}

bootstrap();
