import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { RegionDto, RegionUnicDto } from 'src/view/dto';

@Injectable()
export class RegionEntity {
  constructor(private prisma: PrismaService) {}
  async postRegion(input: RegionDto) {
    const updatedRecords = await this.prisma.noInternet.create({
      data: {
        Have3G: 0,
        Have4G: 0,
        Have5G: 0,
        Have_Fixed_internet: 0,
        No3G: 0,
        No4G: 0,
        No5G: 0,
        No_Fixed_internet: 0,
      },
    });
    await this.prisma.region.create({
      data: {
        RegionName: input.Region,
        PlusCode: input.PlusCode,
        NoInternet_idNoInternet: updatedRecords.idNoInternet,
      },
    });
  }
  async getAllRegion() {
    return await this.prisma.noInternet.findMany({
      include: {
        regions: true,
      },
    });
  }
  async getOneRegion(input: RegionUnicDto) {
    const region = await this.prisma.region.findFirst({
      where: { RegionName: input.region },
    });
    const internet = await this.prisma.noInternet.findFirst({
      where: { idNoInternet: region.NoInternet_idNoInternet },
    });
    return { region: region, internet: internet };
  }
}
