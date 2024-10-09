import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
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
  @Matches(/^55 \(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Phone number must be in the format 55 (XX) XXXXX-XXXX',
  })
  @IsPhoneNumber('BR', {
    message: 'The telephone number must be a valid number in Brazilian format.',
  })
  readonly phone: string;

  @IsNotEmpty({ message: 'The cpf is mandatory' })
  @Length(10, 14, { message: 'The CPF must be 10 to 14 characters long' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'CPF must be in the format XXX.XXX.XXX-XX',
  })
  readonly cpf: string;
}
