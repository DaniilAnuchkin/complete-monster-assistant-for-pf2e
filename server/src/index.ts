import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/test", (req: Request, res: Response) => {
  res.send("just to start");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
