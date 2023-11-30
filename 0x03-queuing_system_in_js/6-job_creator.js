import {
    createQueue,
  } from 'kue';

const queue = createQueue();

const job = queue.create('push_notification_code', {
    phoneNumber: '123456789',
    message: 'your verification will be sent to this phoneNumber',
}).save((err) => {
    if (!err) {
        console.log(`Notification job created: ${job.id}`);
    }
});

job.on('complete', () => console.log('Notification job completed'));
job.on('failed', () => console.log('Notification job failed'));