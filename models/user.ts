import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('Users', {
  id: {
    type: DataTypes.STRING(36), // Use STRING(36) for UUIDs
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
})

export default User
