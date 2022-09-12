import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateGroupDto): Promise<Group> {
    return this.prisma.group.create({
      data
    });
  }

  async findAll(): Promise<Group[]> {
    return this.prisma.group.findMany();
  }

  async findOne(id: number): Promise<Group> {
    return this.prisma.group.findUniqueOrThrow({
      where: {
        id
      }
    });
  }

  async update(id: number, data: UpdateGroupDto): Promise<Group> {
    return this.prisma.group.update({
      where: {
        id
      }, data
    });
  }

  async remove(id: number): Promise<Group> {
    return this.prisma.group.delete({
      where: {
        id
      }
    });
  }
}
