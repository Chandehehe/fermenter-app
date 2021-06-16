import { Pool } from 'pg';

const { POSTGRESDB_USERNAME, POSTGRESDB_PASSWORD, POSTGRESDB_HOST, POSTGRESDB_PORT, POSTGRESDB_DB_DATABASE_NAME } =
  process.env;

export const postgresClient = new Pool({
  max: 20,
  connectionString: `postgres://${POSTGRESDB_USERNAME}:${POSTGRESDB_PASSWORD}@${POSTGRESDB_HOST}:${POSTGRESDB_PORT}/${POSTGRESDB_DB_DATABASE_NAME}`,
  idleTimeoutMillis: 30000,
});
