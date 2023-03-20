import { IGetUserDTO } from "@modules/github/dtos/IGetUserDTO";
import { IRepository } from "@modules/github/interfaces/IRepository";
import { axiosClient } from "@vendor/axios";

interface IRequest extends IGetUserDTO {}

interface IResponse extends IRepository {}

class GetUserReposUseCase {
  async execute({ username }: IRequest): Promise<IResponse[]> {
    const { data } = await axiosClient.get<IResponse[]>(
      `https://api.github.com/users/${username}/repos`,
    );

    return data;
  }
}

export { GetUserReposUseCase };
