import { Module } from '@nestjs/common';
import { PurchaseController } from './constrollers/purchases.controller';

@Module({
  controllers: [PurchaseController],
})
export class MessagingModule {}
