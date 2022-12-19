import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mappers';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsReopository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
