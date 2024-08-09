import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

//nest.js 는 Express 위에서 돌아가기 때문에 컨트롤러에서 request, response객체가 필요하담녀 사용할 수 있다.
//하지만 express 위에서 돌아가면서도 fastify라는걸로 변환시킬 수 있기 떄문에 저렇게 직접 접근하는것은 좋은 방법은 아님(프레임워크를 변환할 수 없음)
//Fastify 는 epxress 보다 2배 빠름
//nestjs 에서 제공하는것을 사용해야 프레임워크 전환에 용이하다.

//single-responsibility principle -하나의 module, class 혹은 function이 하나의 기능만을 책임져야한다.

//movies 가 controller의 entry point
@Controller('movies')
export class MoviesController {
  //express 처럼 수동으로 Import 하지 않교 요청하여 사용한다.
  //dependency injection
  //movies.module 의 Provider에서 service를 추가해주었기 때문에 타입을 추가하는것만으로도 작동할 수 있다.
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a made after ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: number) {
    return this.moviesService.deleteOne(movieID);
  }

  //put-whole resource, patch-part
  @Patch('/:id')
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieID, updateData);
  }
}
