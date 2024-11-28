import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://devbetterflyapp.page.link/?link=https://navigation.betterfly.com/?to%3Dsuccess-process-activation-card&apn=com.betterfly.app.dev&isi=6450281350&ibi=com.betterfly.app.dev&efr=1', 301)
  redirect(): void {
    return ;
  }
}
