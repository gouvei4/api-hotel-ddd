import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from '../dto/createGuestDto';
import { Guest } from '../entities/guestEntity';
import { CreateGuestUseCase } from '../use-cases/createGuestUseCase';

@Injectable()
export class GuestService {
  constructor(private readonly createGuestUseCase: CreateGuestUseCase) {}

  async createGuest(createGuestDto: CreateGuestDto): Promise<Guest> {
    return this.createGuestUseCase.execute(createGuestDto);
  }
}
