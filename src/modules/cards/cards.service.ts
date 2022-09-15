import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(payload: CreateCardDto): Promise<Card> {
    return await this.prisma.card.create({ data: payload });
  }

  async findAll(): Promise<Card[]> {
    return await this.prisma.card.findMany();
  }

  async findOne(id: number): Promise<Card> {
    return await this.prisma.card.findUniqueOrThrow({
      where: { id }
    });
  }

  update(id: number, data: UpdateCardDto) {
    return this.prisma.card.update({
      where: {
        id
      },
      data
    });
  }

  async remove(id: number): Promise<void>{
    await this.prisma.card.delete({
      where: {
        id
      }
    });
  }
}
