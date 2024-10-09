import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/roomEntity';
import { RoomController } from './controllers/roomController';
import { RoomService } from './service/room.service';
import { RoomRepository } from './repositories/roomRepository';
import { CreateRoomUseCase } from './use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from './use-cases/getAllRoomUseCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  controllers: [RoomController],
  providers: [
    RoomService,
    RoomRepository,
    CreateRoomUseCase,
    GetAllRoomUseCase,
  ],
})
export class RoomModule {}
