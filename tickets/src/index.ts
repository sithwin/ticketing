import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined!");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined!");
  }

  try {
    await natsWrapper.connect(
      "ticketing",
      "1133333",
      "http://nats-service:4222"
    );
    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed");
      process.exit();
    });
    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    //await mongoose.connect("mongodb://localhost:27017/auth", {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Connected to mongoDB!!");
  } catch (err) {
    console.error("Error to connect MongoDB", err);
  }

  app.listen(3000, () => {
    console.log("(Tickets Service) Listening on port 3000!");
  });
};

start();
