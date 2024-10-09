import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from '../service/room.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Room } from '../entities/roomEntity';
import { UpdateRoomDto } from '../dto/update-room.dto';

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

  @Patch(':id')
  async updateRoom(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<Room> {
    return this.roomService.updateRoom(id, updateRoomDto);
  }
}
