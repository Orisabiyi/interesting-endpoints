import { Context } from "hono";
import { seatBookingTable } from "../models/schema";
import { db } from "..";

export async function bookSeat(context: Context) {
  try {
    const { showtimeId, seatNumber, status } = await context.req.json();
    const result = await db.insert(seatBookingTable).values({
      showtimeId,
      seatNumber,
      status,
    });

    return context.json(result, 201);
  } catch (error) {
    return context.json({ error }, 500)
  }
}