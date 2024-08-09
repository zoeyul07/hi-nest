import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//데코레이터는 클래스에 함수 기능을 추가할 수 있다. 클래스 위의 함수로 클래스를 위해 움직인다.
@Module({
  imports: [MoviesModule],
  //controller는 기본적으로 url을 가져와 매핑하고 함수를 실행한다.
  //express의 라우터같은 존재
  //Nest.js 는 컨트롤러를 비즈니스 로직이랑 구분지으려함
  //컨트롤러는 Url만 가져오고 서비스에서 비즈니스 로직을 정의한다.
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
