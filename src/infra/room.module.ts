import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from '../domain/entities/roomEntity';
import { CreateRoomUseCase } from '../presentation/use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from '../presentation/use-cases/getAllRoomUseCase';
import { GetRoomByIdUseCase } from '../presentation/use-cases/getByIdRoomUsecase';
import { UpdateRoomUseCase } from '../presentation/use-cases/updateRoomUseCase';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';
import { RoomController } from 'src/presentation/controllers/roomController';
import { RoomService } from 'src/application/services/room.service';

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
    GetRoomByIdUseCase,
    UpdateRoomUseCase,
  ],
  exports: [RoomRepository],
})
export class RoomModule {}
