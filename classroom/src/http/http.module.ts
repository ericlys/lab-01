import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { CoursesService } from '../services/courses.service';
import { EnrolltmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';

import { DatabaseModule } from '../database/database.module';
import { CourseResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentResolver } from './graphql/resolvers/enrollment.resolver';
import { StudentResolver } from './graphql/resolvers/student.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    //Resolvers
    CourseResolver,
    EnrollmentResolver,
    StudentResolver,

    //Services
    CoursesService,
    EnrolltmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
