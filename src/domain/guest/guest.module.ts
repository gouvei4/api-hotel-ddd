import { Module } from '@nestjs/common';
import { GuestController } from './controllers/guestController';
import { GuestService } from './service/guest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, GuestSchema } from './entities/guestEntity';
import { GuestRepository } from './repositories/guestRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }]),
  ],
  controllers: [GuestController],
  providers: [GuestService, GuestRepository],
})
export class GuestModule {}
