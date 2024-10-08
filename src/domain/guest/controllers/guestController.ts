import { Body, Controller, Post } from '@nestjs/common';
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
}
