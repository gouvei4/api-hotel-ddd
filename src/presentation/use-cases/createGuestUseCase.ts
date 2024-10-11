import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGuestDto } from '../../domain/dto/createGuestDto';
import { GuestRepository } from '../../infra/data/repositories/guestRepository';
import { Guest } from '../../domain/entities/guestEntity';

@Injectable()
export class CreateGuestUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  async execute(createGuestDto: CreateGuestDto): Promise<Guest> {
    const existinCpf = await this.guestRepository.findByDocument(
      createGuestDto.cpf,
    );
    if (existinCpf) {
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
