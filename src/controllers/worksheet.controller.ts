import { Request } from 'express';
import worksheetService from '../services/worksheet.service';

export class WorksheetController {
  async getTasks(req: Request, res: any) {
    try {
      const tasks = await worksheetService.getTasks();
      return res.json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}

export default new WorksheetController(); 