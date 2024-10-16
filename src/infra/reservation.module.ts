import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationService } from 'src/application/services/reservation.service';
import {
  Reservation,
  ReservationSchema,
} from 'src/domain/entities/reservationEntity';
import { ReservationController } from 'src/presentation/controllers/reservationController';
import { ReservationRepository } from './data/repositories/reservationRepository';
import { CreateReservationUseCase } from 'src/presentation/use-cases/createReservationUseCase';
import { RoomModule } from './room.module';
import { GuestModule } from './guest.module';
import { Guest, GuestSchema } from 'src/domain/entities/guestEntity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
      { name: Guest.name, schema: GuestSchema },
    ]),
    RoomModule,
    GuestModule,
  ],
  controllers: [ReservationController],
  providers: [
    ReservationService,
    ReservationRepository,
    CreateReservationUseCase,
  ],
})
export class ReservationModule {}
