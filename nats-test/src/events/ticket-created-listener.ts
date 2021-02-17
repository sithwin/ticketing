import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";

export class TicketCreatedListener extends Listener {
  subject = "ticket:created";
  queueGroupName = "payments-service";

  onMessage(data: any, message: Message): void {
    console.log("Event Data!", data);

    message.ack();
  }
}
