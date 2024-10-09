import {
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsString,
  IsIn,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto implements Partial<CreateRoomDto> {
  @IsOptional()
  @IsNotEmpty({ message: 'Room number is required' })
  @IsInt({ message: 'Room number must be an integer' })
  @IsPositive({ message: 'Room number must be a positive number' })
  readonly roomNumber: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Room type is required' })
  @IsString({ message: 'Room type must be a string' })
  @IsIn(['single', 'double', 'suite'], {
    message: 'Room type must be either single, double, or suite',
  })
  readonly roomType: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Capacity is required' })
  @IsInt({ message: 'Capacity must be an integer' })
  @IsPositive({ message: 'Capacity ust be a positive number' })
  readonly capacity: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive({ message: 'Price must be a positive number' })
  readonly price: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Status is required' })
  @IsString({ message: 'Status must be a string' })
  @IsIn(['available', 'unavailable', 'reserved'], {
    message: 'Status must be either available, unavailable, or reserved',
  })
  readonly status: string;

  @IsOptional()
  @IsString({ message: 'Descripton ust be a string' })
  readonly description?: string;
  @IsString({ message: 'Amenities must be a string' })
  readonly amenities?: string;
}
