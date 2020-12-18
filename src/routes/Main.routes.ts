import express from "express";
import Main from "../controllers/Main/Main";

export const MainRoutes = express.Router();
MainRoutes.get("/", Main.index);
