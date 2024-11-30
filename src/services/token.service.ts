import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import SessionToken from '../models/SessionToken';

export class TokenService {
  private readonly JWT_SECRET = process.env.JWT_SECRET as string;
  private readonly JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;

  async generateToken(): Promise<{ token: string, id: string }> {
    const sessionId = uuidv4();
    
    // Generate JWT
    const token = jwt.sign(
      { sessionId },
      this.JWT_SECRET,
      { expiresIn: this.JWT_EXPIRES_IN }
    );

    // Create session token record
    await SessionToken.create({
      id: sessionId,
      token
    });

    return { token, id: sessionId };
  }
}

export default new TokenService(); 