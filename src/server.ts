import express from "express";
import cors from "cors";
import { MainRoutes } from "./routes/Main.routes";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/main", MainRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
