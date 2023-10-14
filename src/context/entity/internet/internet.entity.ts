import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { MobileDto } from 'src/view/dto';
import { ReturnDb } from 'src/view/interface';

@Injectable()
export class InternetEntity {
  constructor(private prisma: PrismaService) {}
  async postNoInternet(input: MobileDto) {
    try {
      const result = await this.prisma.region.findFirst({
        where: { RegionName: input.region },
        include: {
          NoInternet: true,
        },
      });
      return result;
    } catch (e) {
      throw new HttpException(
        'Generic Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
  async createNoHaveInternet(internet: ReturnDb) {
    const result = await this.prisma.noInternet.create({
      data: {
        Have3G: internet.NoInternet.Have3G,
        Have4G: internet.NoInternet.Have4G,
        Have5G: internet.NoInternet.Have5G,
        Have_Fixed_internet: internet.NoInternet.Have_Fixed_internet,
        No3G: internet.NoInternet.No3G,
        No4G: internet.NoInternet.No4G,
        No5G: internet.NoInternet.No5G,
        No_Fixed_internet: internet.NoInternet.No_Fixed_internet,
      },
    });
    await this.prisma.region.delete({
      where: { idRegion: internet.idRegion },
    });
    await this.prisma.region.create({
      data: {
        RegionName: internet.RegionName,
        PlusCode: internet.PlusCode,
        NoInternet_idNoInternet: result.idNoInternet,
      },
    });
  }

  async postInternet(input: MobileDto) {
    try {
      const result = await this.prisma.region.findFirst({
        where: { RegionName: input.region },
        include: {
          NoInternet: true,
        },
      });
      return result;
    } catch (e) {
      throw new HttpException(
        'Generic Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
  async createHaveInternet(internet: ReturnDb) {
    try {
      const result = await this.prisma.noInternet.create({
        data: {
          Have3G: internet.NoInternet.Have3G,
          Have4G: internet.NoInternet.Have4G,
          Have5G: internet.NoInternet.Have5G,
          Have_Fixed_internet: internet.NoInternet.Have_Fixed_internet,
          No3G: internet.NoInternet.No3G,
          No4G: internet.NoInternet.No4G,
          No5G: internet.NoInternet.No5G,
          No_Fixed_internet: internet.NoInternet.No_Fixed_internet,
        },
      });
      await this.prisma.region.delete({
        where: { idRegion: internet.idRegion },
      });
      await this.prisma.region.create({
        data: {
          RegionName: internet.RegionName,
          PlusCode: internet.PlusCode,
          NoInternet_idNoInternet: result.idNoInternet,
        },
      });
    } catch (e) {
      throw new HttpException(
        'Generic Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
}
