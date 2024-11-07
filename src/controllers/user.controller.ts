import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { responseError, responseGET, responsePOST } from "../utils";

export class UserController {
  constructor(private readonly userService: UserService) {}

  private handleError = (error: any, res: Response) => {
    const response = responseError({
      msg: error.message,
    });

    return res.status(error.response.status).json(response);
  };

  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(responsePOST(user));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await this.userService.getUser(req.params.id);
      res.status(200).json(responseGET(null, user));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(responseGET(null, users));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      res.status(200).json(responsePOST(user));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await this.userService.deleteUser(req.params.id);
      res.status(200).json(responsePOST(null));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }
}
