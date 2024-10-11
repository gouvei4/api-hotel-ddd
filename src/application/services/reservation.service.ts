import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from 'src/domain/dto/createReservationDto';
import { CreateReservationUseCase } from 'src/presentation/use-cases/createReservationUseCase';

@Injectable()
export class ReservationService {
  constructor(
    private readonly createReservationUseCase: CreateReservationUseCase,
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    return this.createReservationUseCase.execute(createReservationDto);
  }
}
