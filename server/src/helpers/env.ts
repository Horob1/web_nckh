import dotenv from 'dotenv';

dotenv.config({
  path: `${process.env.NODE_ENV}.env`,
});

export default {
  db: { DATABASE_URL: process.env.DATABASE_URL },
  jwt: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_LIFE_TIME: process.env.ACCESS_TOKEN_LIFE_TIME,
    REFRESH_TOKEN_LIFE_TIME: process.env.REFRESH_TOKEN_LIFE_TIME,
  },
  MORGAN_FORMAT: process.env.MORGAN_FORMAT,
  PORT: process.env.PORT || 3000,
} as const;
