import { CreateGuestDto } from './createGuestDto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateGuestDto extends PartialType(CreateGuestDto) {}
