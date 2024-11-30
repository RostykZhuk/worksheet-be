import { AuthRequest } from '../middleware/auth.middleware';
import answerService from '../services/answer.service';

export class AnswerController {
  async submitAnswer(req: AuthRequest, res: any) {
    try {
      const { taskId } = req.params;
      const { optionId } = req.body;
      const sessionId = req.sessionId;

      if (!sessionId || !optionId) {
        return res.status(400).json({
          error: 'Missing required fields'
        });
      }

      const isCorrect = await answerService.submitAnswer(taskId, optionId, sessionId);
      
      return res.status(200).json({
        correct: isCorrect
      });
    } catch (error) {
      console.error('Error submitting answer:', error);
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}

export default new AnswerController(); 