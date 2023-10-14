
import { InternetEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class MobileService {
  constructor(private repository: InternetEntity) {}
  async Mobile() {}
}
