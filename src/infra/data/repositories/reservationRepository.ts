import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from 'src/domain/entities/reservationEntity';

@Injectable()
export class ReservationRepository {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<Reservation>,
  ) {}

  async createReservation(data: Partial<Reservation>): Promise<Reservation> {
    const newReservation = new this.reservationModel(data);
    return newReservation.save();
  }

  async findById(id: string): Promise<Reservation | null> {
    return this.reservationModel.findById(id).exec();
  }

  async findByRoomId(roomId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ room: roomId }).exec();
  }

  async findByGuestId(guestId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ guest: guestId }).exec();
  }
}
