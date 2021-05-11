import { doLogin, getUserFromToken } from './index';
import { MOCK_USER } from '../../mocks';
import { UserTable } from '../../persistence';

const MOCK_TOKEN = 'token';
const MOCK_TOKEN_DETAILS = { foo: 'bar' };

jest.mock('jsonwebtoken', () => ({
  sign: () => MOCK_TOKEN,
  verify: () => MOCK_TOKEN_DETAILS,
}));

jest.mock('../../persistence');

describe('auth', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach((done) => {
    jest.clearAllMocks();
    done();
  });

  describe('doLogin', () => {
    it('should return null when email/password are not valid', async () => {
      jest.spyOn(UserTable, 'findOne').mockImplementationOnce(() => Promise.resolve(null));
      const result = await doLogin('email', 'password');
      expect(result).toBe(null);
    });

    it('should return token when email/password are valid', async () => {
      jest.spyOn(UserTable, 'findOne').mockImplementationOnce(() => Promise.resolve(MOCK_USER));
      const result = await doLogin(MOCK_USER.email, MOCK_USER.password);
      expect(result).toBe(MOCK_TOKEN);
    });
  });

  describe('getUserFromToken', () => {
    it('should return null when headers are not valid', () => {
      const result = getUserFromToken(undefined);
      expect(result).toBe(null);
    });

    it('should return token details when headers are valid', () => {
      const result = getUserFromToken('Bearer 123');
      expect(result).toBe(MOCK_TOKEN_DETAILS);
    });
  });
});
