import { Injectable, NotFoundException } from '@nestjs/common';
import { RoomRepository } from '../repositories/roomRepository';
import { Room } from '../entities/roomEntity';

@Injectable()
export class GetRoomByIdUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(id: string): Promise<Room> {
    const rooms = await this.roomRepository.findById(id);

    if (!rooms) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }

    return rooms;
  }
}
