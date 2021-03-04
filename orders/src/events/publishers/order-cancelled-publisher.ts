import { Publisher, OrderCancelledEvent, Subjects } from "@vmticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
