import { Hono } from "hono";
import { bookSeat } from "../controllers/seat-booking.controller";

const seatBookingRouter = new Hono();

seatBookingRouter.post("/book-seat", bookSeat);

export default seatBookingRouter;