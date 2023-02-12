import { IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field({ description: '用户名' })
  @IsNotEmpty()
  username: string;

  @Field({ description: '密码，最小长度为8位' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
