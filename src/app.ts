import express from "express";
import { NODE_ENV, PORT } from "./config";
import { connect, set, disconnect } from "mongoose";
import { dbConnection } from "./databases";
class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 4000;

    this.connectToDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Backend server running at http://localhost:${this.port}.`);
    });
  }

  public async closeDatabaseConnection(): Promise<void> {
    try {
      await disconnect();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error closing database connection:", error);
    }
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    if (this.env !== "production") {
      set("debug", true);
    }

    await connect(dbConnection.url);
    console.log(`Database connected successfully`);
  }
}

export default App;
