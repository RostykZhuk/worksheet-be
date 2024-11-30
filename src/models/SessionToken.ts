import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface SessionTokenAttributes {
  id: string;
  token: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SessionToken extends Model<SessionTokenAttributes> implements SessionTokenAttributes {
  public id!: string;
  public token!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SessionToken.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'session_tokens',
    timestamps: true // This will automatically manage createdAt and updatedAt
  }
);

export default SessionToken; 