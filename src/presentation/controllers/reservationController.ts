import { Controller, Post, Body } from '@nestjs/common';
import { ReservationService } from 'src/application/services/reservation.service';
import { CreateReservationDto } from 'src/domain/dto/createReservationDto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservation(createReservationDto);
  }
}
