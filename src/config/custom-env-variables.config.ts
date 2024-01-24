import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  POSTGRES_CONNECTION_STRING: process.env.POSTGRES_CONNECTION_STRING,
  PORT: process.env.PORT || 8000
}

export default envConfig;