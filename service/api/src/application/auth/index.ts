import { sign, verify } from 'jsonwebtoken';

import { UserTable } from '../../persistence/index';
import { Token } from '../../types/auth';
import { logger } from '../../logger';

const { TOKEN_SECRET, TOKEN_EXPIRY } = process.env;

export const getUserFromToken = (token: string): null | Token => {
  if (!token) {
    return null;
  }
  const tokenData = token.split(' ');
  try {
    const tokenPayload = verify(tokenData[1], TOKEN_SECRET || '') as Token;
    return tokenPayload;
  } catch (err) {
    logger.warn(err);
    return null;
  }
};

export const doLogin = async (email: string, password: string): Promise<string | null> => {
  const userFound = await UserTable.findOne(email);
  if (!userFound) {
    logger.warn({ message: 'user not found with email/password provided', email });
    return null;
  }

  // TODO: hash + salt password
  const userPassword = userFound.get('password');
  if (userPassword !== password) {
    logger.warn({ message: 'user not found with email/password provided', email });
    return null;
  }

  return sign(
    {
      algorithm: 'HS256',
      subject: userFound.get('id'),
      expiresIn: TOKEN_EXPIRY,
    },
    TOKEN_SECRET || '',
    { expiresIn: TOKEN_EXPIRY },
  );
};
