import { Model, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/database';
import WorksheetTask from './WorksheetTask';
import TaskOption from './TaskOption';
import SessionToken from './SessionToken';

interface TaskAnswerAttributes {
  id: string;
  task_id: string;
  option_id: string;
  session_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TaskAnswerCreationAttributes extends Omit<TaskAnswerAttributes, 'id' | 'createdAt' | 'updatedAt'> {
  task_id: string;
  option_id: string;
  session_id: string;
}

export class TaskAnswer extends Model<TaskAnswerAttributes, TaskAnswerCreationAttributes> {
  declare id: CreationOptional<string>;
  declare task_id: string;
  declare option_id: string;
  declare session_id: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

TaskAnswer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: WorksheetTask,
        key: 'id'
      }
    },
    option_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: TaskOption,
        key: 'id'
      }
    },
    session_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: SessionToken,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'task_answers',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['task_id', 'session_id']
      }
    ]
  }
);

// Define relationships
TaskAnswer.belongsTo(WorksheetTask, {
  foreignKey: 'task_id',
  as: 'task'
});

TaskAnswer.belongsTo(TaskOption, {
  foreignKey: 'option_id',
  as: 'selectedOption'
});

TaskAnswer.belongsTo(SessionToken, {
  foreignKey: 'session_id',
  as: 'session'
});

export default TaskAnswer; 