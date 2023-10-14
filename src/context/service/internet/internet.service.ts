import { InternetEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MobileDto } from 'src/view/dto';
@Injectable()
export class InternetService {
  constructor(private repository: InternetEntity) {}

  async putInternet(input: MobileDto) {
    const db = await this.repository.postInternet(input);
    switch (input.connectiontype) {
      case '3g':
        db.NoInternet.Have3G = db.NoInternet.Have3G + 1;
        break;
      case '4g':
        db.NoInternet.Have4G = db.NoInternet.Have4G + 1;
        break;
      case '5g':
        db.NoInternet.Have5G = db.NoInternet.Have5G + 1;
        break;
      case 'Fixed_internet':
        db.NoInternet.Have_Fixed_internet =
          db.NoInternet.Have_Fixed_internet + 1;
        break;
      default:
        break;
    }
    await this.repository.createHaveInternet(db);
    return { res: 'Zona com internet foi adicionado', status: 200 };
  }
  async putNoInternet(input: MobileDto) {
    const db = await this.repository.postNoInternet(input);
    switch (input.connectiontype) {
      case '3g':
        db.NoInternet.No3G = db.NoInternet.No3G + 1;
        break;
      case '4g':
        db.NoInternet.No4G = db.NoInternet.No4G + 1;
        break;
      case '5g':
        db.NoInternet.No5G = db.NoInternet.No5G + 1;
        break;
      case 'Fixed_internet':
        db.NoInternet.No_Fixed_internet = db.NoInternet.No_Fixed_internet + 1;
        break;
      default:
        break;
    }
    await this.repository.createNoHaveInternet(db);
    return { res: 'Zona sem internet foi adicionado', status: 200 };
  }
}
