import { Injectable } from '@nestjs/common';
import { Guest } from '../entities/guestEntity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGuestDto } from '../dto/createGuestDto';

@Injectable()
export class GuestRepository {
  constructor(@InjectModel(Guest.name) private guestModel: Model<Guest>) {}

  async findByDocument(document: string): Promise<Guest | null> {
    return this.guestModel.findOne({ document }).exec();
  }

  async findByEmail(email: string): Promise<Guest | null> {
    return this.guestModel.findOne({ email }).exec();
  }

  async create(createUserDto: CreateGuestDto): Promise<Guest> {
    const createdGuest = new this.guestModel(createUserDto);
    return createdGuest.save();
  }

  async findAll(): Promise<Guest[]> {
    return this.guestModel.find().exec();
  }

  async findById(id: string): Promise<Guest | null> {
    return this.guestModel.findById(id).exec();
  }
}
