import { IGetUserDTO } from "@modules/github/dtos/IGetUserDTO";
import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  async handle(request: Request, response: Response) {
    const { username } = request.params as unknown as IGetUserDTO;

    const getUserUseCase = new GetUserUseCase();

    const data = await getUserUseCase.execute({
      username,
    });

    return response.status(200).json(data);
  }
}

export { GetUserController };
