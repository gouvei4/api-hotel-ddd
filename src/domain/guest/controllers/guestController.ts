import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GuestService } from '../service/guest.service';
import { CreateGuestDto } from '../dto/createGuestDto';
import { Guest } from '../entities/guestEntity';

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
