import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../../domain/dto/create-room.dto';
import { Room } from '../../domain/entities/roomEntity';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';

@Injectable()
export class CreateRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  async execute(createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomRepository.create(createRoomDto);
  }
}
