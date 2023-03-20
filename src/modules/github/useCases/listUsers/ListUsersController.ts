import { IListUsersDTO } from "@modules/github/dtos/IListUsersDTO";
import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const { since } = request.query as unknown as IListUsersDTO;

    const listUsersUseCase = new ListUsersUseCase();

    const data = await listUsersUseCase.execute({
      since,
    });

    return response.status(200).json(data);
  }
}

export { ListUsersController };
