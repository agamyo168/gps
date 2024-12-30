import dotenv from 'dotenv';
import express, { json } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Location } from './dtos/location.interface';
import LocationsRepository from './repositories/Locations.repository';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(json());
const locationRepository = new LocationsRepository();
app.post('/api/v1/location', async (req, res) => {
  const { lat, long } = <Location>req.body;
  const location = await locationRepository.create({ lat, long });
  res.status(StatusCodes.OK).json({
    success: true,
    location,
  });
});
const start = async () => {
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
};
start();
export default app;
