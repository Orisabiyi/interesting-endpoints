import 'dotenv/config'
import { createDb } from './lib/db'
import { seatBookingTable } from './models/schema'

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) throw new Error('DATABASE_URL is not set in .env')

const db = createDb(databaseUrl)

const SHOWTIME_ID = 1
const TOTAL_SEATS = 20

async function seed() {
  try {
    const seats = Array.from({ length: TOTAL_SEATS }, (_, index) => ({
      showtimeId: SHOWTIME_ID,
      seatNumber: index + 1,
      status: 'available' as const,
    }))

    await db.insert(seatBookingTable).values(seats).onConflictDoNothing()
  } catch (error) {
    console.error('Error seeding the database:', error)
    throw error
  }
}

seed()
  .then(() => {
    console.log('Database seeding completed.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error during seeding:', error)
    process.exit(1)
  })