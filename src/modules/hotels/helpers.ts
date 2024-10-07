interface HotelFilter {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  distance?: number;
  lat?: number;
  lng?: number;
}

export const queryFilter = (filter: HotelFilter): any => {
  const query: any = {};

  if (filter.name) {
    const nameRegex = new RegExp(`.*${filter.name}.*`, "i");
    query.$or = [
      { "name.en-US": { $regex: nameRegex } },
      { "name.de-DE": { $regex: nameRegex } },
      { "name.es-ES": { $regex: nameRegex } },
      { "name.fr-FR": { $regex: nameRegex } },
    ];
  }

  if (filter.minPrice !== undefined || filter.maxPrice !== undefined) {
    query.minPrice = {};
    if (filter.minPrice !== undefined) {
      query.minPrice.$gte = filter.minPrice;
    }
    if (filter.maxPrice !== undefined) {
      query.minPrice.$lte = filter.maxPrice;
    }
  }
  
  return query;
};
