import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [GroupsController],
  providers: [GroupsService,  PrismaService]
})
export class GroupsModule {}
