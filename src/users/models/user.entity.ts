import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/models/base.entity';

export class User extends BaseEntity {
  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '微信ID',
  })
  wx_id?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '支付宝ID',
  })
  ali_id?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '小程序ID',
  })
  openid?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '用户名',
  })
  username?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '昵称',
  })
  nickname?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '头像',
  })
  avatar?: string;

  @ApiProperty({
    example: '18878311282',
    description: '手机号',
  })
  phone?: string;

  @ApiProperty({
    example: '13376548965',
    description: '备用手机号',
  })
  backup_phone?: string;

  @ApiProperty({
    example: 'false',
    description: '开启隐私保护',
  })
  enable_protect?: boolean;

  @ApiProperty({
    example: 'false',
    description: '开启短信通知',
  })
  enable_sms?: boolean;

  @ApiProperty({
    example: 'false',
    description: '开启微信通知',
  })
  enable_wechat?: boolean;

  @ApiProperty({
    example: '男',
    description: '性别',
  })
  sex?: string;

  @ApiProperty({
    example: '中国',
    description: '国家',
  })
  country?: string;

  @ApiProperty({
    example: '广东省',
    description: '省份',
  })
  province?: string;

  @ApiProperty({
    example: '深圳市',
    description: '城市',
  })
  city?: string;

  @ApiProperty({
    example: '粤BFE7650',
    description: '车牌号',
  })
  car_number?: string;

  @ApiProperty({
    example: '临时停靠，多多关照',
    description: '车主留言',
  })
  car_message?: string;

  @ApiProperty({
    example: '正常',
    description: '状态',
  })
  status?: string;

  @ApiProperty({
    example: 'fdghgfdhrwmlcas',
    description: '密码',
  })
  password?: string;
}
