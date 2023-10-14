import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

@Injectable()
export class MobileDto {
  @ApiProperty()
  @IsString()
  region: string;
  
  @ApiProperty({
    description: 'Tipo de conexão móvel (3g, 4g, 5g, Fixed_internet)',
    enum: ['3g', '4g', '5g', 'Fixed_internet'],
  })
  @IsIn(['3g', '4g', '5g', 'Fixed_internet'])
  connectiontype: string;
}
