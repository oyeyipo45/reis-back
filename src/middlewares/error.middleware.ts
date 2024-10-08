
import { HttpException } from '../exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';
const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    const success: boolean = false
    const result: string =  null
    res.status(status).json({ message, success, result });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
