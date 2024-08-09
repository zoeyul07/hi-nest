import { Module } from '@nestjs/common';
import { MoviesController } from '../movies/movies.controller';
import { MoviesService } from '../movies/movies.service';

//provider 추가로 인해 nestjs가 moviesService를 controller에 inject 하게 된다.
@Module({ controllers: [MoviesController], providers: [MoviesService] })
export class MoviesModule {}
