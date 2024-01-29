import { ErrorRequestHandler, NextFunction, Response } from 'express';
import { MessageResponse } from '@src/interfaces';

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error,
  req,
  res: Response<MessageResponse<null>>,
  // eslint-disable-next-line
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  res?.status(statusCode);
  res?.status(statusCode).send({
    data: null,
    success: false,
    error: true,
    message: error.message || 'Internal Server Error',
    status: statusCode,
  });
};

export default errorHandlerMiddleware;
