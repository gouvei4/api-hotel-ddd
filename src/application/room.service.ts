import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from 'src/domain/dto/create-room.dto';
import { UpdateRoomDto } from 'src/domain/dto/update-room.dto';
import { Room } from 'src/domain/entities/roomEntity';
import { CreateRoomUseCase } from 'src/presentation/use-cases/createRoomUseCase';
import { GetAllRoomUseCase } from 'src/presentation/use-cases/getAllRoomUseCase';
import { GetRoomByIdUseCase } from 'src/presentation/use-cases/getByIdRoomUsecase';
import { UpdateRoomUseCase } from 'src/presentation/use-cases/updateRoomUseCase';

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
