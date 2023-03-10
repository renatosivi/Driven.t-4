import { getBooking, postBooking, putBooking } from "@/controllers";
import { authenticateToken, validateBody, validateParams } from "@/middlewares";
import { BookingBodySchema, BookingIdSchema } from "@/schemas/bookings-schemas";
import { Router } from "express";

const bookingsRouter: Router = Router();

bookingsRouter.use(authenticateToken);

bookingsRouter.get("/", getBooking);

bookingsRouter.post("/", validateBody(BookingBodySchema, "FORBIDDEN"), postBooking);

bookingsRouter.put(
  "/:bookingId",
  validateParams(BookingIdSchema, "FORBIDDEN"),
  validateBody(BookingBodySchema, "FORBIDDEN"),
  putBooking
);

export { bookingsRouter };
