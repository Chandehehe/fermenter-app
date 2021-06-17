export type Token = {
  algorithm: string;
  subject: string;
  expiresIn: string;
};

export type Context = {
  user: {
    algorithm: string;
    subject: string;
    expiresIn: string;
    iat: number;
    exp: number;
  };
};
