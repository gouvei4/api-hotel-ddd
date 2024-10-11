import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../../infra/data/repositories/guestRepository';
import { Guest } from '../../domain/entities/guestEntity';

@Injectable()
export class GetAllGuestUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  async exeute(): Promise<Guest[]> {
    const guests = await this.guestRepository.findAll();
    return guests;
  }
}
