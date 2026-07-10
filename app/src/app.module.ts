import { Module } from '@nestjs/common';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [AppController],
  providers: [
    makeCounterProvider({
      name: 'enrollment_requests_total',
      help: 'Total number of student enrollments processed',
    }),
  ],
})
export class AppModule {}