import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from '../service/room.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomService.createRoom(createRoomDto);
  }
}
