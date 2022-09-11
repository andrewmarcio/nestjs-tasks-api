import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CardsModule } from './cards/cards.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [TasksModule, CardsModule, GroupsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
