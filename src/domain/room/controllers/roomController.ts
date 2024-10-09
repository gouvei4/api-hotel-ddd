import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get()
  async getAllRoom(): Promise<Room[]> {
    return this.roomService.getAllRoom();
  }

  @Get(':id')
  async getRoomById(@Param('id') id: string): Promise<Room> {
    return this.roomService.getRoomById(id);
  }
}
