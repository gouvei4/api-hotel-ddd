import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Guest } from 'src/domain/entities/guestEntity';
import { Reservation } from 'src/domain/entities/reservationEntity';

@Injectable()
export class ReservationRepository {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<Reservation>,
    @InjectModel(Guest.name)
    private guestModel: Model<Guest>,
  ) {}

  async createReservation(data: Partial<Reservation>): Promise<Reservation> {
    const newReservation = new this.reservationModel(data);
    return newReservation.save();
  }

  async findById(id: string): Promise<Guest | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid guestId');
    }
    return this.guestModel.findById(new Types.ObjectId(id)).exec();
  }

  async findByRoomId(roomId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ room: roomId }).exec();
  }

  async findByGuestId(guestId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ guest: guestId }).exec();
  }
}
