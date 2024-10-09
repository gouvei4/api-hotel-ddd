import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from '../entities/roomEntity';
import { CreateRoomDto } from '../dto/create-room.dto';
import { Model } from 'mongoose';

Injectable();
export class RoomRepository {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createdRoom = new this.roomModel(createRoomDto);
    return createdRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }

  async findById(id: string): Promise<Room | null> {
    return this.roomModel.findById(id).exec();
  }
}
