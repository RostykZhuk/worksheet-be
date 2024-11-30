import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import WorksheetTask from './WorksheetTask';

interface TaskOptionAttributes {
  id: string;
  isCorrect: boolean;
  text: string;
  task_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class TaskOption extends Model<TaskOptionAttributes> implements TaskOptionAttributes {
  public id!: string;
  public isCorrect!: boolean;
  public text!: string;
  public task_id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TaskOption.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: WorksheetTask,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'task_options',
    timestamps: true
  }
);

export default TaskOption; 