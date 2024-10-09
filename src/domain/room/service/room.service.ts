import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';
import { CreateRoomUseCase } from '../use-cases/createRoomUseCase';

@Injectable()
export class RoomService {
  constructor(private readonly createRoomUseCase: CreateRoomUseCase) {}

  async createRoom(createroomDto: CreateRoomDto): Promise<Room> {
    return this.createRoomUseCase.execute(createroomDto);
  }
}
