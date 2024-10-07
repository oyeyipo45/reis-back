import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const port = process.env.PORT;
if (!port) {
  console.error("Missing environment variable 'PORT'!");
  process.exit(1);
}

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}.`);
});
