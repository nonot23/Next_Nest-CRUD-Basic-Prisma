import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule]
})
export class UserModule {}
