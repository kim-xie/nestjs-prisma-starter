import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @ApiProperty({
    description: 'ID',
  })
  id: string;

  @ApiProperty({
    description: '创建时间',
  })
  created_at?: Date;

  @ApiProperty({
    description: '更新时间',
  })
  updated_at?: Date;
}
