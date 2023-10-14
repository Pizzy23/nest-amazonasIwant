import { InternetService } from 'src/context/service';
import { Controller, Post, Headers, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MobileDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Internet')
@Controller('/Internet')
export class InternetController {
  constructor(private readonly service: InternetService) {}

  @ApiOperation({
    summary: '',
  })
  @UseInterceptors(SuccessInterceptor)
  @Post('/Have')
  async postInternet(@Headers() input: MobileDto): Promise<any> {
    return await this.service.putInternet(input);
  }
  @ApiOperation({
    summary: '',
  })
  @UseInterceptors(SuccessInterceptor)
  @Post('/No')
  async postNoInternet(@Headers() input: MobileDto): Promise<any> {
    return await this.service.putNoInternet(input);
  }
}
