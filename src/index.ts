import express from "express";
import cors from "cors";

import itemRoutes from "./routes/itemRoutes";
import { logger } from "./middleware/logger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/items", itemRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});