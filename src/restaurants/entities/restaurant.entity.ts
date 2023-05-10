/**
 * 餐厅类
 */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  /**
   * 餐厅名称
   */
  @Field((type) => String, { nullable: true })
  name: string;

  /**
   * 是否为素食餐厅
   */
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;

  /**
   * 餐厅地址
   */
  @Field((type) => String, { nullable: true })
  address?: string;

  /**
   * 餐厅老板姓名
   */
  @Field((type) => String, { nullable: true })
  ownerName?: string;
}
