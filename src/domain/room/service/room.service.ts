import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';
import { CreateRoomUseCase } from '../use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from '../use-cases/getAllRoomUseCase';
import { GetRoomByIdUseCase } from '../use-cases/getByIdRoomUsecase';

@Injectable()
export class RoomService {
  constructor(
    private readonly createRoomUseCase: CreateRoomUseCase,
    private readonly getAllRoomUseCase: GetAllRoomUseCase,
    private readonly getRoomByIdUseCase: GetRoomByIdUseCase,
  ) {}

  async createRoom(createroomDto: CreateRoomDto): Promise<Room> {
    return this.createRoomUseCase.execute(createroomDto);
  }

  async getAllRoom(): Promise<Room[]> {
    return this.getAllRoomUseCase.execute();
  }

  async getRoomById(id: string): Promise<Room> {
    return this.getRoomByIdUseCase.execute(id);
  }
}
