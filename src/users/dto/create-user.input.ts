import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  wx_id?: string;

  @Field()
  ali_id?: string;

  @Field()
  openid?: string;

  @Field()
  nickname?: string;

  @Field()
  avatar?: string;

  @Field()
  phone?: string;

  @Field()
  backup_phone?: string;

  @Field()
  enable_protect: boolean;

  @Field()
  enable_sms: boolean;

  @Field()
  enable_wechat: boolean;

  @Field()
  sex?: string;

  @Field()
  country?: string;

  @Field()
  province?: string;

  @Field()
  city?: string;

  @Field()
  car_numbe?: string;

  @Field()
  car_message?: string;

  @Field(() => String, { nullable: false })
  status: string;
}
