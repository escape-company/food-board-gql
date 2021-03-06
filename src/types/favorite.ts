import { ObjectType, Field, Int, InputType } from 'type-graphql';
import Favorite from '../models/favorite.entity';
import { IsInt, IsOptional } from 'class-validator';

@ObjectType()
export class FavoriteType implements Partial<Favorite> {
  @Field(_type => Int)
  id: number;

  @Field(_type => Int, { nullable: true })
  userId?: number;

  @Field(_type => Int, { nullable: true })
  storeId?: number;
}

@InputType()
export class FavoriteOptions {
  @Field(_type => Int, { nullable: false })
  @IsOptional()
  userId?: number;

  @Field(_type => Int, { nullable: false })
  @IsOptional()
  storeId?: number;

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  offset?: number;

  @Field(_type => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  limit?: number;
}
