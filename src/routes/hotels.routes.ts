
import { Router } from "express";
import HotelsController from '../modules/hotels/controller/hotels.controller';

export interface Routes {
  path?: string;
  router: Router;
}

class HotelsRoute implements Routes {
  public path = "/v1/recruiting/hotels";
  public router = Router();
  public usersController = new HotelsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getHotels);
  }
}

export default HotelsRoute;
