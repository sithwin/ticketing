import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@vmticketing/common";
import { body } from "express-validator";
import { Ticket } from "../model/ticket";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is require"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be grater than Zero"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });
    await ticket.save();
    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
