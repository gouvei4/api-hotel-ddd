import { Injectable, NotFoundException } from '@nestjs/common';
import { Room } from '../../domain/entities/roomEntity';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';

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
