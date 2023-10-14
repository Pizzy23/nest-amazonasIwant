import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class RegionDto {
  @ApiProperty()
  @IsString()
  Region: string;
  
  @ApiProperty()
  @IsString()
  PlusCode: string;
}
export class RegionUnicDto {
  @ApiProperty()
  @IsString()
  region: string;
}
