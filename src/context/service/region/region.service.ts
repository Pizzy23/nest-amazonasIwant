import { RegionEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegionDto, RegionUnicDto } from 'src/view/dto';
@Injectable()
export class RegionService {
  constructor(private repository: RegionEntity) {}

  async postRegion(input: RegionDto) {
    await this.repository.postRegion(input);
    return { res: 'Regiao adicionada com sucesso', status: 200 };
  }
  async getAllRegion() {
    const region = await this.repository.getAllRegion();
    return { res: region, status: 200 };
  }
  async getOneRegion(input: RegionUnicDto) {
    const region = await this.repository.getOneRegion(input);
    let average = this.calcuAverage(region.internet);
    delete region.region.NoInternet_idNoInternet
    delete region.region.idRegion
    const data = {
      region: region.region,
      average: {
        NotHaveInternet: average[0],
        HaveInternet: average[1],
      },
    };
    return { res: data, status: 200 };
  }
  private calcuAverage(object) {
    const haveValues: number[] = [];
    const noValues: number[] = [];

    for (const key in object) {
      if (key.startsWith('Have')) {
        haveValues.push(object[key]);
      } else if (key.startsWith('No')) {
        noValues.push(object[key]);
      }
    }

    const averageHaveInternet =
      haveValues.reduce((acc, value) => acc + value, 0) / haveValues.length;
    const averageNoInternet =
      noValues.reduce((acc, value) => acc + value, 0) / noValues.length;

    return [averageNoInternet, averageHaveInternet];
  }
}
