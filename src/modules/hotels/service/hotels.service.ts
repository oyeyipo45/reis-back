import { Result } from 'common/common.interface';
import { IHotel, IHotelResponse } from '../interface/hotels.interface';
import hotelModel from "../model/hotels.models";
import { queryFilter } from '../helpers';

class HotelService {
  public hotels = hotelModel;

  public async findAllHotels(req): Promise<Result> {
    const { search, lang = "en-US", minPrice, maxPrice, distance, lat, lng } = req.query;

    const filters = { name : search, minPrice, maxPrice, distance, lat, lng };


    const filteredQuery = queryFilter(filters);

    const hotels: IHotelResponse[] = await this.hotels.find(filteredQuery);

    return {
      success: true,
      result: hotels,
      error: "",
    };
  }
}

export default HotelService;
