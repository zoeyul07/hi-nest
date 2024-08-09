//DtO-data transfer object
//코드를 더 간결하게 만들어 주기도 하지만 들어오는 쿼리에 대해 유효성을 검사할 수 있게 해준다.
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  //each:true - 요소 하나하나 검사. validate each text
  @IsString({ each: true })
  readonly genres: string[];
}
