import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//@nestjs/mapped-types: 타입을 변환시키고 사용할 수 있게 한다.
//allow to transform dto
//partialType-필수 타입이 아님
//서버가 실시간으로 체크됨, typescript의 장점도 이용할 수 있고, 유효성 검사도 따로 하지 않아도 됨
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
