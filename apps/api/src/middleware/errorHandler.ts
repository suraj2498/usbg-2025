import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export interface ApiError extends Error {
  statusCode?: number;
  code?: string;
}

export const errorHandler = (
  // @ts-ignore
  err: ApiError | Prisma.PrismaClientKnownRequestError, // ← Update this
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error:', err);

  // Prisma errors
  // @ts-ignore
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      res.status(409).json({
        success: false,
        message: 'Resource already exists',
      });
      return;
    }
    if (err.code === 'P2025') {
      res.status(404).json({
        success: false,
        message: 'Resource not found',
      });
      return;
    }
  }

  // @ts-ignore
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export const createError = (message: string, statusCode = 500): ApiError => {
  const error: ApiError = new Error(message);
  error.statusCode = statusCode;
  return error;
};
