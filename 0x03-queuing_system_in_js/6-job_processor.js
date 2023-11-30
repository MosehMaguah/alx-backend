import {
    createQueue,
} from 'kue';

const queue = createQueue();

const sendNotification = (message, phoneNumber) => {
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

queue.process('push_notification_code', (job) => {
    sendNotification(job.data.phoneNumber, job.data.message);
});