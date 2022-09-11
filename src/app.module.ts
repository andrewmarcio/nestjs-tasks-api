import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { CardsModule } from './modules/cards/cards.module';
import { GroupsModule } from './modules/groups/groups.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TasksModule,
    CardsModule,
    GroupsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
