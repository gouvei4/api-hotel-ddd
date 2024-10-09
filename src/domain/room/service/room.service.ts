import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';
import { CreateRoomUseCase } from '../use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from '../use-cases/getAllRoomUseCase';

@Injectable()
export class RoomService {
  constructor(
    private readonly createRoomUseCase: CreateRoomUseCase,
    private readonly getAllRoomUseCase: GetAllRoomUseCase,
  ) {}

  async createRoom(createroomDto: CreateRoomDto): Promise<Room> {
    return this.createRoomUseCase.execute(createroomDto);
  }

  async getAllRoom(): Promise<Room[]> {
    return this.getAllRoomUseCase.execute();
  }
}
