import { PartialType } from '@nestjs/mapped-types';
import { CreateReservation } from 'src/domain/reservation/dto/create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservation) {}
