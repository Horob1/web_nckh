import env from './../helpers/env';
import mongoose from 'mongoose';

export default () => {
  mongoose.set('strictQuery', true).connect(env.db.DATABASE_URL, {}, (error: any) => {
    if (error) {
      console.error('❌ [server]: Database connection failed:', error);
      console.log(error);
      process.exit(0);
    } else {
      console.log(`⚡️ [server]: Database is connected!`);
    }
  });
};
