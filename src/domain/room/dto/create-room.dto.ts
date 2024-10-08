export class CreateRoomDto {
  readonly roomNumber: number;
  readonly roomType: string;
  readonly capacity: number;
  readonly price: number;
  readonly status: string;
  readonly description?: string;
  readonly amenities?: string;
}
