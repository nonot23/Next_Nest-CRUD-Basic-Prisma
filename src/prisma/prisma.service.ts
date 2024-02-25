import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  constructor() {}

  user =  prisma.user;

  async create(data): Promise<any> {
    return this.user.create({
      data,
    });
  }
}