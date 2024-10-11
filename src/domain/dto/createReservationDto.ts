import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty({ message: 'Room ID is required' })
  @IsString({ message: 'Room ID must be a string' })
  readonly roomId: string;

  @IsNotEmpty({ message: 'CPF is required' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'CPF must be in the format XXX.XXX.XXX-XX',
  })
  readonly cpf: string;
}
