import { Context } from "hono";
import { seatBookingTable } from "../models/schema";

export async function bookSeat(context: Context) {
  try {
    const { showtimeId, seatNumber, status } = await context.req.json();
    const result = await context.env.db.insert(seatBookingTable).values({
      showtimeId,
      seatNumber,
      status,
    });

    return context.json(result, 201);
  } catch (error) {
    return context.json({ error }, 500)
  }
}