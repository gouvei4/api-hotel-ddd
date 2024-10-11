import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from '../../../domain/entities/roomEntity';
import { CreateRoomDto } from '../../../domain/dto/create-room.dto';
import { Model } from 'mongoose';
import { UpdateRoomDto } from '../../../domain/dto/update-room.dto';

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

  async updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomModel
      .findByIdAndUpdate(id, updateRoomDto, { new: true })
      .exec();
  }

  async save(room: Room): Promise<Room> {
    return room.save();
  }
}
