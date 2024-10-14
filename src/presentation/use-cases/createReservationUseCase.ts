import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateReservationDto } from 'src/domain/dto/createReservationDto';
import { GuestRepository } from 'src/infra/data/repositories/guestRepository';
import { RoomRepository } from 'src/infra/data/repositories/roomRepository';
import { ReservationRepository } from 'src/infra/data/repositories/reservationRepository';
import { Types } from 'mongoose';

@Injectable()
export class CreateReservationUseCase {
  constructor(
    private readonly roomRepository: RoomRepository,
    private readonly guestRepository: GuestRepository,
    private readonly reservationRepository: ReservationRepository,
  ) {}

  async execute(createReservationDto: CreateReservationDto) {
    const { roomId, guestId } = createReservationDto;

    const room = await this.roomRepository.findById(roomId);
    if (!room) {
      throw new NotFoundException('Room not found');
    }

    if (room.status !== 'available') {
      throw new BadRequestException('Room is already reserved or unavailable');
    }

    const guest = await this.guestRepository.findById(guestId);

    if (!guest) {
      throw new NotFoundException('Guest not found with this ID');
    }

    await this.reservationRepository.createReservation({
      room: new Types.ObjectId(roomId),
      guest: new Types.ObjectId(guestId),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      status: 'active',
    });

    room.status = 'reserved';
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
