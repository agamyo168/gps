import { Location } from '../dtos/location.interface';
import { Locations } from '../models/Locations.model';
export default class LocationsRepository {
  async findAll() {
    return await Locations.findAll();
  }
  async create(location: Location) {
    return await Locations.create({ ...location });
  }
}
