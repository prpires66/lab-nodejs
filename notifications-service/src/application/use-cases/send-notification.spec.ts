import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const NotificationRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(NotificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(NotificationRepository.notifications).toHaveLength(1);
    expect(NotificationRepository.notifications[0]).toEqual(notification);
  });
});
