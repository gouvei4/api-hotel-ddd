import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../repositories/roomRepository';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {}

  async create(createroomDto: CreateRoomDto): Promise<Room> {
    return this.roomRepository.create(createroomDto);
  }
}
