import { CustomerError } from "./custom-error";

export class DatabaseConnectionError extends CustomerError {
  statusCode = 500;
  reason = "Failed to connect to datbase";

  constructor() {
    super("Database connection error");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
