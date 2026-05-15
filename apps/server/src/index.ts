import mongoose from 'mongoose';
import app from './app';
import { config } from './config';

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
      console.log(`Server running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Startup error', error);
    process.exit(1);
  }
};

start();
