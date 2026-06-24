import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import seatBookingRouter from './routes/seat-booking.route'

const app = new Hono()
const db = drizzle(process.env.DATABASE_URL!)

app.route("/v1/api", seatBookingRouter);

export default app
