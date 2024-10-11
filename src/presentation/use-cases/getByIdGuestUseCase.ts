import { Injectable, NotFoundException } from '@nestjs/common';
import { Guest } from '../../domain/entities/guestEntity';
import { GuestRepository } from '../../infra/data/repositories/guestRepository';

@Injectable()
export class GetGuestByIdUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  async execute(id: string): Promise<Guest> {
    const guest = await this.guestRepository.findById(id);

    if (!guest) {
      throw new NotFoundException(`Guest with ID ${id} not found`);
    }

    return guest;
  }
}
