import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../repositories/roomRepository';
import { Room } from '../entities/roomEntity';

@Injectable()
export class GetAllRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(): Promise<Room[]> {
    const rooms = await this.roomRepository.findAll();
    return rooms;
  }
}
