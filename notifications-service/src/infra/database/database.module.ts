import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsReopository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsReopository,
    }
  ],
  exports: [
    NotificationsRepository,
  ],
})

export class DatabaseModule {}