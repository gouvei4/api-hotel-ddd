import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty({ message: 'Room ID is required' })
  @IsString({ message: 'Room ID must be a string' })
  readonly roomId: string;

  @IsNotEmpty({ message: 'Guest ID is required' })
  @IsString({ message: 'Guest ID must be a string' })
  readonly guestId: string;
}
