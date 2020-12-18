import express from "express";
import File from "../controllers/File/file.controller";

export const MainRoutes = express.Router();
MainRoutes.get("/", File.index);
