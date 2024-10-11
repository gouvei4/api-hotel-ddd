import { Module } from '@nestjs/common';
import { GuestController } from '../presentation/controllers/guestController';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, GuestSchema } from '../domain/entities/guestEntity';
import { GuestRepository } from './data/repositories/guestRepository';
import { CreateGuestUseCase } from '../presentation/use-cases/createGuestUseCase';
import { GetAllGuestUseCase } from '../presentation/use-cases/getAllGuestUseCase';
import { GetGuestByIdUseCase } from '../presentation/use-cases/getByIdGuestUseCase';
import { GuestService } from 'src/application/guest.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }]),
  ],
  controllers: [GuestController],
  providers: [
    GuestService,
    GuestRepository,
    CreateGuestUseCase,
    GetAllGuestUseCase,
    GetGuestByIdUseCase,
  ],
})
export class GuestModule {}
