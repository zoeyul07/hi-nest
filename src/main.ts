import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//main.ts에서 모든것을 시작
async function bootstrap() {
  //하나의 모듈에서 어플리케이션을 생성하고 app module 모든것의 루트모듈
  //모듈은 엎플리케이션의 일부분으로 django의 app
  //한가지 역할을 하는 app 으로 인증을 담당하는 어플리케이션이 있다면 users module
  const app = await NestFactory.create(AppModule);
  //미들웨어 역할을 한다.
  app.useGlobalPipes(
    //class-validator & class-transformer: 유효성을 검사해줌
    //
    new ValidationPipe({
      //아무 decorator가 없는 property의 object를 거른다.
      whitelist: true,
      //이상한것을 보내면 Request 자체를 막는다.
      forbidNonWhitelisted: true,
      //url이 보낸 모든 값은 string인데 유저들이 보낸것을 우리가 원한느 실제 타입으로 변환해준다.
      //타입을 받아서 원하는 타입으로 변환해준다.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
