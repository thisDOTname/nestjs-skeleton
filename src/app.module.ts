import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UsersModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HelmetMiddleware, LoggerMiddleware)
      .forRoutes('*');
  }
}
