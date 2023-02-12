import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field({
    description: '创建时间',
  })
  created_at?: Date;

  @Field({
    description: '更新时间',
  })
  updated_at?: Date;
}
