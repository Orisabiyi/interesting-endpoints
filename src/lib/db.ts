import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

export const createDb = (databaseUrl: string) => {
  const sql = neon(databaseUrl)
  return drizzle({ client: sql })
}

export type Database = ReturnType<typeof createDb>