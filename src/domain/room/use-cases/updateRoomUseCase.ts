import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../repositories/roomRepository';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Room } from '../entities/roomEntity';

@Injectable()
export class UpdateRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomRepository.updateRoom(id, updateRoomDto);
  }
}
