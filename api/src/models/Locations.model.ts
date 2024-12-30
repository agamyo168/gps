import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
export const Locations = sequelize.define('locations', {
  // Model attributes are defined here
  long: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  lat: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});
