import { IsString } from 'class-validator';

export class SingupDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
