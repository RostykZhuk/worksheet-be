import { TaskAnswer } from '../models/TaskAnswer';
import { TaskOption } from '../models/TaskOption';

export class AnswerService {
  async submitAnswer(taskId: string, optionId: string, sessionId: string): Promise<boolean> {
    // Find the selected option to check if it's correct
    const selectedOption = await TaskOption.findOne({
      where: { 
        id: optionId,
        task_id: taskId
      }
    });

    if (!selectedOption) {
      throw new Error('Option not found');
    }

    const existingAnswer = await TaskAnswer.findOne({
      where: {
        task_id: taskId,
        session_id: sessionId
      }
    });

    if (existingAnswer) {
      await existingAnswer.update({
        option_id: optionId
      });
    } else {
      await TaskAnswer.create({
        task_id: taskId,
        option_id: optionId,
        session_id: sessionId
      });
    }

    return selectedOption.isCorrect;
  }
}

export default new AnswerService(); 