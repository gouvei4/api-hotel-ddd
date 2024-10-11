import { Injectable } from '@nestjs/common';
import { Room } from '../../domain/entities/roomEntity';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';

@Injectable()
export class GetAllRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(): Promise<Room[]> {
    const rooms = await this.roomRepository.findAll();
    return rooms;
  }
}
