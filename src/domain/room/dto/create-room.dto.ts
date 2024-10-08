export class CreateRoomDto {
  readonly roomNumber: number;
  readonly type: string;
  readonly price: number;
  readonly description?: string;
  readonly amenities?: string;
}
