import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// process.env

@Module({
  imports: [ConfigModule.forRoot()],
})
export class HttpModule {}
