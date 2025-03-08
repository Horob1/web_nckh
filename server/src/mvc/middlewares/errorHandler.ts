import { Request, Response, NextFunction } from 'express';
import { AppError } from '../models/error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'dev') console.error(`❌ [ERROR] ${err.message}`);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      code: err.statusCode,
    });
  }

  return res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    code: 500,
  });
};

export default errorHandler;
