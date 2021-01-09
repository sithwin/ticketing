export class DatabaseConnectionError extends Error {
  reason = "Failed to connect to datbase";

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
