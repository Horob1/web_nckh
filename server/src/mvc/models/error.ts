import { StatusCodes } from 'http-status-codes';

// Custom Error Class để thống nhất lỗi
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Đảm bảo stack trace không bị mất
    Error.captureStackTrace(this, this.constructor);
  }
}
