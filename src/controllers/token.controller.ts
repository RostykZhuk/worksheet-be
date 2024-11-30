import { Request } from 'express';
import tokenService from '../services/token.service';

export class TokenController {
  async createToken(req: Request, res: any) {
    try {
      const { token } = await tokenService.generateToken();
      
      return res.status(201).json({
        sessionToken: token
      });
    } catch (error) {
      console.error('Error generating token:', error);
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}

export default new TokenController(); 