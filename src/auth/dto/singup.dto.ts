import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SingupOrLoginDto {
  @IsString()
  @ApiProperty({
    description: '用户名',
  })
  readonly username: string;

  @IsString()
  @ApiProperty({
    description: '密码，至少8位长度',
  })
  readonly password: string;
}
