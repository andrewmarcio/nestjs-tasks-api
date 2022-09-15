import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { Card } from '@prisma/client';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) { }

  @Post()
  @HttpCode(201)
  async create(@Body() data: CreateCardDto): Promise<Card> {
    return await this.cardsService.create(data);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Card[]> {
    return await this.cardsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string): Promise<Card> {
    return await this.cardsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(203)
  async update(@Param('id') id: string, @Body() data: UpdateCardDto): Promise<Card> {
    return await this.cardsService.update(+id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    await this.cardsService.remove(+id);
  }
}
