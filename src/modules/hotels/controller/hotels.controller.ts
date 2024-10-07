import { NextFunction, Request, Response } from "express";
import HotelService from "../service/hotels.service";
import { Result } from "common/common.interface";

class HotelsController {
  public hotelService = new HotelService();

  public getHotels = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllHotels: Result = await this.hotelService.findAllHotels(req);

      res.status(200).json(findAllHotels);
    } catch (error) {
      next(error);
    }
  };
}

export default HotelsController;
