import WorksheetTask from '../models/WorksheetTask';
import TaskOption from '../models/TaskOption';

export class WorksheetService {
  async getTasks() {
    const tasks = await WorksheetTask.findAll({
      include: [{
        model: TaskOption,
        as: 'options',
        attributes: ['id', 'text']
      }],
      attributes: ['id', 'instruction']
    });

    return {
      tasks
    };
  }
}

export default new WorksheetService(); 