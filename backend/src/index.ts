import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "hello world!" });
});

app.listen(7000, () => {
  console.log("Server running on port 7000");
});
