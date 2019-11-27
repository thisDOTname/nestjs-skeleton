import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  getApp(): Promise<any> {
    return new Promise(resolve => {
      resolve(true);
    });
  }
}
