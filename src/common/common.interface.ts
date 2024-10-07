import { IHotelResponse } from 'modules/hotels/interface/hotels.interface';

export interface Result {
  success: boolean;
  error: string;
  result: IHotelResponse[];
}
