import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from '@nestjs/class-validator';

export class CreateGuestDto {
  @IsNotEmpty({ message: 'The first name is mandatory.' })
  @IsString({ message: 'First name must be a string' })
  @Length(3, 10, { message: 'The name must be between 3 and 50 characters.' })
  readonly firstName: string;

  @IsNotEmpty({ message: 'The lastName name is mandatory.' })
  @IsString({ message: 'First name must be a string' })
  @Length(3, 10, { message: 'The name must be between 3 and 50 characters.' })
  readonly lastName: string;

  @IsNotEmpty({ message: 'Email must be mandatory' })
  @IsEmail({ message: 'The email must be valid and contain the @ character' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'The phone number cannot be empty.' })
  @IsPhoneNumber('BR', {
    message: 'The telephone number must be a valid number in Brazilian format.',
  })
  readonly phone: string;

  @IsNotEmpty({ message: 'The document is mandatory' })
  readonly document: string;
}
