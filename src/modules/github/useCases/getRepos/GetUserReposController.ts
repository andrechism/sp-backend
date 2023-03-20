import { IGetUserDTO } from "@modules/github/dtos/IGetUserDTO";
import { Request, Response } from "express";
import { GetUserReposUseCase } from "./GetUserReposUseCase";

class GetUserReposController {
  async handle(request: Request, response: Response) {
    const { username } = request.params as unknown as IGetUserDTO;

    const getUserUseCase = new GetUserReposUseCase();

    const data = await getUserUseCase.execute({
      username,
    });

    return response.status(200).json(data);
  }
}

export { GetUserReposController };
