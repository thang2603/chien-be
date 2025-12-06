import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LayoutsService } from './layouts.service';
import { CreateLayoutDto, UpdateLayoutDto } from './dto/layout.dto';

@Controller('layouts')
export class LayoutsController {
  constructor(private readonly layoutService: LayoutsService) {}

  @Post()
  create(@Body() dto: CreateLayoutDto) {
    return this.layoutService.create(dto);
  }

  @Get()
  findAll() {
    return this.layoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layoutService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLayoutDto) {
    return this.layoutService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layoutService.delete(id);
  }
}
