import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendnotification = new SendNotification();

    const { notification } = await sendnotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
