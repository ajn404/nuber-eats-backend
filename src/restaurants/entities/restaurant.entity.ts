/**
 * 餐厅类
 */
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  /**
   * 餐厅名称
   */
  @Field((type) => String, { nullable: true })
  @Column()
  name: string;

  /**
   * 是否为素食餐厅
   */
  @Field((type) => Boolean, { nullable: true })
  @Column()
  isVegan?: boolean;

  /**
   * 餐厅地址
   */
  @Field((type) => String, { nullable: true })
  @Column()
  address?: string;

  /**
   * 餐厅老板姓名
   */
  @Field((type) => String, { nullable: true })
  @Column()
  ownerName?: string;

  @Field((type) => String, { nullable: true })
  @Column()
  categoryName: string;
}
