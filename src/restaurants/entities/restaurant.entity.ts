/**
 * 餐厅类
 */
import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
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
  @Field((type) => String)
  @Column({ default: true })
  @IsString()
  @Length(5, 10)
  name: string;

  /**
   * 是否为素食餐厅
   */
  @Field((type) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  /**
   * 餐厅地址
   */
  @Field((type) => String, { nullable: true })
  @Column()
  @IsString()
  @IsOptional()
  address: string;

  /**
   * 餐厅老板姓名
   */
  @Field((type) => String, { nullable: true })
  @Column()
  @IsString()
  @IsOptional()
  ownerName: string;

  /**
   * 餐厅类别名称
   */
  @Field((type) => String, { nullable: true })
  @Column()
  @IsString()
  @IsOptional()
  categoryName: string;
}
