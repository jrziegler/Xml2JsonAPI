import express from "express";
import MainController from "../controllers/MainRoutes";

export const MainRoutes = express.Router();
MainRoutes.get("/", MainController.index);
