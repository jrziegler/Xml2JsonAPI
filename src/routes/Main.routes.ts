import express from "express";
import Main from "../controllers/Main";

export const MainRoutes = express.Router();
MainRoutes.get("/", Main.index);
