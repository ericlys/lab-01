import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../services/courses.service';
import { EnrolltmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { PurchaseController } from './constrollers/purchases.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrolltmentsService],
})
export class MessagingModule {}
