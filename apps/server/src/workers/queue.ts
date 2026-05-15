import { Queue, Worker, QueueScheduler } from 'bullmq';
import { config } from '../config';
import Redis from 'ioredis';

const connection = new Redis(config.redisUrl);

export const reviewQueue = new Queue('review-queue', { connection });
export const reviewQueueScheduler = new QueueScheduler('review-queue', { connection });

export const reviewWorker = new Worker(
  'review-queue',
  async (job) => {
    console.log(`Processing review ${job.id}`, job.data);
    return { processed: true };
  },
  { connection }
);
