import express from "express";
import {  NODE_ENV, PORT } from "./config";
class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 4000;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Backend server running at http://localhost:${this.port}.`);
    });
  }


  public getServer() {
    return this.app;
  }

}

export default App;
