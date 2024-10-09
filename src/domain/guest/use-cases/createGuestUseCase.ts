import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGuestDto } from '../dto/createGuestDto';
import { GuestRepository } from '../repositories/guestRepository';
import { Guest } from '../entities/guestEntity';

@Injectable()
export class CreateGuestUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  async execute(createGuestDto: CreateGuestDto): Promise<Guest> {
    const existinDocument = await this.guestRepository.findByDocument(
      createGuestDto.document,
    );
    if (existinDocument) {
      throw new BadRequestException(
        'A guest with this document is already registered',
      );
    }

    const existingEmail = await this.guestRepository.findByEmail(
      createGuestDto.email,
    );
    if (existingEmail) {
      throw new BadRequestException('Guest with email is already registered');
    }

    const guest = await this.guestRepository.create(createGuestDto);
    return guest;
  }
}
