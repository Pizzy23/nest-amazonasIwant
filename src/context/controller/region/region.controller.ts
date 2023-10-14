import { RegionService } from 'src/context/service';
import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegionDto, RegionUnicDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Region')
@Controller('/Region')
export class RegionController {
  constructor(private readonly service: RegionService) {}

  @ApiOperation({
    summary: '',
  })
  @UseInterceptors(SuccessInterceptor)
  @Post('/')
  async postRegion(@Body() input: RegionDto): Promise<any> {
    return await this.service.postRegion(input);
  }

  @ApiOperation({
    summary: '',
  })
  @UseInterceptors(SuccessInterceptor)
  @Get('/All')
  async getAllRegion(): Promise<any> {
    return await this.service.getAllRegion();
  }

  @ApiOperation({
    summary: '',
  })
  @UseInterceptors(SuccessInterceptor)
  @Get('/One')
  async getOneRegion(@Headers() input: RegionUnicDto): Promise<any> {
    return await this.service.getOneRegion(input);
  }
}
