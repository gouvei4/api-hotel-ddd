import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from '../domain/dto/createGuestDto';
import { Guest } from '../domain/entities/guestEntity';
import { CreateGuestUseCase } from '../presentation/use-cases/createGuestUseCase';
import { GetAllGuestUseCase } from '../presentation/use-cases/getAllGuestUseCase';
import { GetGuestByIdUseCase } from '../presentation/use-cases/getByIdGuestUseCase';

@Injectable()
export class GuestService {
  constructor(
    private readonly createGuestUseCase: CreateGuestUseCase,
    private readonly getAllGuestUseCase: GetAllGuestUseCase,
    private readonly getGuestByIdUseCase: GetGuestByIdUseCase,
  ) {}

  async createGuest(createGuestDto: CreateGuestDto): Promise<Guest> {
    return this.createGuestUseCase.execute(createGuestDto);
  }

  async getAllGuest(): Promise<Guest[]> {
    return this.getAllGuestUseCase.exeute();
  }

  async getGuestById(id: string): Promise<Guest> {
    return this.getGuestByIdUseCase.execute(id);
  }
}
