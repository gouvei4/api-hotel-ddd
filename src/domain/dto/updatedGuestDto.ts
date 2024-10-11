import { PartialType } from '@nestjs/mapped-types';
import { CreateGuestDto } from './createGuestDto';
export class UpdateGuestDto extends PartialType(CreateGuestDto) {}
