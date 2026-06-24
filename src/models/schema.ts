import { pgTable, integer, varchar, timestamp, unique } from 'drizzle-orm/pg-core'

// table without payment
export const seatBookingTable = pgTable('booking', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  showtimeId: integer('showtime_id').notNull(),
  status: varchar('status', { enum: ['booked', 'cancelled'] }).notNull(),
  seatNumber: integer('seat_number').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  uniqueSeatPerShowtime: unique('unique_seat_per_showtime').on(table.showtimeId, table.seatNumber)
}))