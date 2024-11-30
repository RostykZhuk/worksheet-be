import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import TaskOption from './TaskOption';

interface WorksheetTaskAttributes {
  id: string;
  instruction: string;
  createdAt?: Date;
  updatedAt?: Date;
  options?: TaskOption[];
}

export class WorksheetTask extends Model<WorksheetTaskAttributes> implements WorksheetTaskAttributes {
  public id!: string;
  public instruction!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public options?: TaskOption[];
}

WorksheetTask.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'worksheet_tasks',
    timestamps: true
  }
);

// Define the relationship
WorksheetTask.hasMany(TaskOption, {
  sourceKey: 'id',
  foreignKey: 'task_id',
  as: 'options'
});

export default WorksheetTask; 