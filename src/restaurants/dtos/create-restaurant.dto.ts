import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

// Define an input type for creating a restaurant
@InputType() // Use the @InputType decorator
export class CreateRestaurantDto extends OmitType(
  Restaurant, // Extend the Restaurant entity
  ['id'], // Omit the id field
  InputType, // Use the @InputType decorator
) {} // End of CreateRestaurantDto class
