import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGuestDto } from '../../domain/dto/createGuestDto';
import { Guest } from '../../domain/entities/guestEntity';
import { GuestService } from 'src/application/services/guest.service';

@Controller('guests')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  async create(@Body() createGuestDto: CreateGuestDto): Promise<Guest> {
    return this.guestService.createGuest(createGuestDto);
  }

  @Get()
  async getAllGuests(): Promise<Guest[]> {
    return this.guestService.getAllGuest();
  }

  @Get(':id')
  async getGuestById(@Param('id') id: string): Promise<Guest> {
    return this.guestService.getGuestById(id);
  }
}
