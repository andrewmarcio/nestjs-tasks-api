import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpCode
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from '@prisma/client';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createGroup: CreateGroupDto) {
    return this.groupsService.create(createGroup);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Group[]> {
    return await this.groupsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: number): Promise<Group> {
    return await this.groupsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(203)
  update(@Param('id') id: string, @Body() updateGroup: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroup);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    await this.groupsService.remove(+id);
  }
}
