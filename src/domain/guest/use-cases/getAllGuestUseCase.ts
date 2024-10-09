import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/guestRepository';
import { Guest } from '../entities/guestEntity';

@Injectable()
export class GetAllGuestUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  async exeute(): Promise<Guest[]> {
    const guests = await this.guestRepository.findAll();
    return guests;
  }
}
