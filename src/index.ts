import { Hono } from 'hono'
import seatBookingRouter from './routes/seat-booking.route'

type Bindings = {
  DATABASE_URL: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.route("/v1/api", seatBookingRouter)

export default app
