import { Request, Response } from "express";

const MainController = {
  async index(req: Request, res: Response) {
    try {
      return res.json({ message: "Ok" });
    } catch (error) {
      return res.json(error);
    }
  },
};

export default MainController;
