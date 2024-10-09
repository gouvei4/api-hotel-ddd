import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';
import { CreateRoomUseCase } from '../use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from '../use-cases/getAllRoomUseCase';
import { GetRoomByIdUseCase } from '../use-cases/getByIdRoomUsecase';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { UpdateRoomUseCase } from '../use-cases/updateRoomUseCase';

@Injectable()
export class RoomService {
  constructor(
    private readonly createRoomUseCase: CreateRoomUseCase,
    private readonly getAllRoomUseCase: GetAllRoomUseCase,
    private readonly getRoomByIdUseCase: GetRoomByIdUseCase,
    private readonly updateRoomByUseCase: UpdateRoomUseCase,
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

  async updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.updateRoomByUseCase.execute(id, updateRoomDto);
  }
}
