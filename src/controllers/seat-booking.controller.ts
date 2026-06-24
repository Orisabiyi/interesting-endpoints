import { Context } from "hono";
import { seatBookingTable } from "../models/schema";

export async function bookSeat(context: Context) {
  try {
    const { seatId, seatNumber } = await context.req.json();
    const result = await context.env.db.insert(seatBookingTable).values({
      seatId,
      seatNumber,
      status: 'booked',
    });

    return context.json(result, 201);
  } catch (error) {
    return context.json({ error }, 500)
  }
}