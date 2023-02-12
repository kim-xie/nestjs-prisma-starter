import 'reflect-metadata';
import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field({ description: '微信ID' })
  wx_id?: string;

  @Field({ description: '支付宝ID' })
  ali_id?: string;

  @Field({ description: '小程序ID' })
  openid?: string;

  @Field({ description: '用户名' })
  username?: string;

  @Field({ description: '昵称' })
  nickname?: string;

  @Field({ description: '头像' })
  avatar?: string;

  @Field({ description: '手机号' })
  phone?: string;

  @Field({ description: '备用手机号' })
  backup_phone?: string;

  @Field({ description: '开启隐私保护' })
  enable_protect?: boolean;

  @Field({ description: '开启短信通知' })
  enable_sms?: boolean;

  @Field({ description: '开启微信通知' })
  enable_wechat?: boolean;

  @Field({ description: '性别' })
  sex?: string;

  @Field({ description: '国家' })
  country?: string;

  @Field({ description: '省份' })
  province?: string;

  @Field({ description: '地区' })
  city?: string;

  @Field({ description: '车牌号' })
  car_number?: string;

  @Field({ description: '车主留言' })
  car_message?: string;

  @Field({ description: '状态' })
  status?: string;

  @HideField()
  password?: string;

  @Field({
    description: '创建时间',
  })
  created_at?: Date;

  @Field({
    description: '更新时间',
  })
  updated_at?: Date;
}
