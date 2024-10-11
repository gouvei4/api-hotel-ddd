import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateReservationDto } from 'src/domain/dto/createReservationDto';
import { GuestRepository } from 'src/infra/data/repositories/guestRepository';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';

@Injectable()
export class CreateReservationUseCase {
  constructor(
    private readonly roomRepository: RoomRepository,
    private readonly guestRepository: GuestRepository,
  ) {}

  async execute(createReservationDto: CreateReservationDto) {
    const { roomId, cpf } = createReservationDto;

    const room = await this.roomRepository.findById(roomId);
    if (!room) {
      throw new NotFoundException('Room not found');
    }

    if (room.status !== 'available') {
      throw new BadRequestException('Room is already reserved or unavailable');
    }

    const guest = await this.guestRepository.findByCpf(cpf);
    if (!guest) {
      throw new NotFoundException('User not found with this CPF');
    }

    room.status = 'reserved';
    room.reservedBy = guest._id.toString();
    await this.roomRepository.save(room);

    return {
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      price: room.price,
      guest: {
        name: guest.firstName,
        cpf: guest.cpf,
      },
      status: 'reserved',
    };
  }
}
