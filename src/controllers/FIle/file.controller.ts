import { Request, Response } from "express";
import { convertToJson } from "./utils/convertToJson";
import path from "path";

const staticBasePath = "./src/data/";

const FileController = {
  async index(req: Request, res: Response) {
    try {
      const fileName = "demo.xml";
      const fileLoc = path.resolve(`${staticBasePath}${fileName}`);
      const data = await convertToJson(fileLoc);
      return res.json({ result: data });
    } catch (error) {
      return res.json(error);
    }
  },
};

export default FileController;
