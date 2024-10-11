import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from 'src/domain/dto/createGuestDto';
import { Guest } from 'src/domain/entities/guestEntity';
import { CreateGuestUseCase } from 'src/presentation/use-cases/createGuestUseCase';
import { GetAllGuestUseCase } from 'src/presentation/use-cases/getAllGuestUseCase';
import { GetGuestByIdUseCase } from 'src/presentation/use-cases/getByIdGuestUseCase';

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
