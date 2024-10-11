import { Injectable } from '@nestjs/common';
import { UpdateRoomDto } from '../../domain/dto/update-room.dto';
import { Room } from '../../domain/entities/roomEntity';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';

@Injectable()
export class UpdateRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomRepository.updateRoom(id, updateRoomDto);
  }
}
