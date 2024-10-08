import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/guestRepository';
import { CreateGuestDto } from '../dto/createGuestDto';
import { Guest } from '../entities/guestEntity';

@Injectable()
export class GuestService {
  constructor(private readonly guestRepository: GuestRepository) {}

  async create(createGuestDto: CreateGuestDto): Promise<Guest> {
    return this.guestRepository.create(createGuestDto);
  }
}
