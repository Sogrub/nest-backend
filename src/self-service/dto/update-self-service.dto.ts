import { PartialType } from '@nestjs/mapped-types';
import { CreateSelfServiceDto } from './create-self-service.dto';

export class UpdateSelfServiceDto extends PartialType(CreateSelfServiceDto) {}
