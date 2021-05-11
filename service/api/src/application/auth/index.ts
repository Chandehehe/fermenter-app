import { sign, verify } from 'jsonwebtoken';

import { Token } from '../../types/auth';
import { logger } from '../../logger';

// TODO: swap for real users
const USER_EMAIL = 'head@brewer.com';
const USER_PASSWORD = 'pAsSWoRd!';
const USER_ID = '';

// TODO: move to config
const SECRET = 'f1BtnWgD3VKY';
const TOKEN_EXPIRY = '1d';

export const getUserFromToken = (token: string): null | Token => {
  if (!token) {
    return null;
  }
  const tokenData = token.split(' ');
  try {
    const tokenPayload = verify(tokenData[1], SECRET) as Token;
    return tokenPayload;
  } catch (err) {
    logger.warn(err);
    return null;
  }
};

export const doLogin = async (email: string, password: string): Promise<string | null> => {
  const userFound = email === USER_EMAIL && password === USER_PASSWORD;

  if (!userFound) {
    logger.warn({ message: 'user not found with email/password provided', email });
    return null;
  }

  return sign(
    {
      algorithm: 'HS256',
      subject: USER_ID,
      expiresIn: TOKEN_EXPIRY,
    },
    SECRET,
    { expiresIn: TOKEN_EXPIRY },
  );
};
