import { Controller, Post, Body, Get } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Controller()
export class AppController {
  constructor(
    @InjectMetric('enrollment_requests_total')
    public enrollmentCounter: Counter<string>,
  ) {}

  @Get()
  getHome() {
    return { message: "NestJS Backend is Active" };
  }

  @Post('enroll')
  enrollStudent(@Body() body: any) {
    this.enrollmentCounter.inc();
    return {
      status: 'success',
      message: `Successfully enrolled ${body.name} into ${body.course}`,
      serverId: process.env.HOSTNAME || 'local-machine', 
    };
  }
}