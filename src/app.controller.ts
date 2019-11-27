import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
    @Get()
    async getApp() {
      const app = await this.appService.getApp();
      return app;
    }
}
